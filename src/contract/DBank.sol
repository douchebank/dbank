// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error TOKENS_AND_WEIGHTS_MISMATCH();
error ALLOCATION_SUM_NOT_100();
error NO_INVESTED_AMOUNT();

contract DBank {

    // constants
    address private immutable _admin;
    address private immutable _GHOAddress;
    ISwapRouter private immutable _swapRouter;
    uint24 private constant poolFee = 100;

    constructor(address swapRouter, address GHOAddress) {
        _swapRouter = ISwapRouter(swapRouter);
        _GHOAddress = GHOAddress;
        _admin = msg.sender;
    }

    // struct to store a investment plan details
    struct InvestmentPlans {
        string name;
        string description;
        uint256 planId;
        address[] tokens;
        uint256[] allocations;
        address creator;
    }

    // struct to maintain User Investments
    struct UserInvestment {
        uint256 totalGHOInvested;
        uint256[] holdings;
    }

    // mapping to track user investments, username -> planId -> investment struct
    mapping (address => mapping(uint256 => UserInvestment)) private _userInvestments;

    // mapping to track every plan
    mapping (uint256 => InvestmentPlans) public planDetails;

    // private counter to maintain the number of plans
    uint256 private _counter = 0;

    // array of supported tokens
    address[] public supportedTokens;

    // events
    event PlanCreated(uint256 planId, string planName, string description, address[] tokens, uint256[] allocations, address creator);
    event InvestedInPlan(uint256 planId, uint256 amountInvested, address investorAddress, address[] tokens, uint256[] holdingsBought);
    event WithdrewPlan(uint256 planId, uint256 amountOut, address investorAddress, address[] tokens, uint256[] holdingsSold);

    // function to create a plan - onlyOwner
    function createPlan(string memory _name, string memory _description, address[] memory _tokens, uint256[] memory _allocations) external returns (bool) {
        if (_tokens.length != _allocations.length) {
            revert TOKENS_AND_WEIGHTS_MISMATCH();
        }

        uint256 totalAllocation = 0;

        for (uint256 i = 0; i < _allocations.length; i++) {
            totalAllocation += _allocations[i];
        }

        if (totalAllocation != 10000) {
            revert ALLOCATION_SUM_NOT_100();
        }

        planDetails[_counter] = InvestmentPlans({
            name: _name,
            description: _description,
            planId: _counter,
            tokens: _tokens,
            allocations: _allocations,
            creator: msg.sender
        });

        _counter++;

        emit PlanCreated(_counter, _name, _description, _tokens, _allocations, msg.sender);

        return true;
    }

    // fetch a plan - return struct
    function fetchPlanDetails(uint256 _planId) external view returns (InvestmentPlans memory) {
        return planDetails[_planId];
    }

    // Internal function to swap GHO to token
    function _swapGHOToToken(uint256 _amountIn, address _tokenOut) internal returns (uint256 amountOut) {
        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: _GHOAddress,
                tokenOut: _tokenOut,
                fee: poolFee,
                recipient: address(this),
                deadline: block.timestamp,
                amountIn: _amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        amountOut = _swapRouter.exactInputSingle(params);
    }

    // Internal function to swap token to GHO
    function _swapTokenToGHO(uint256 _amountIn, address _tokenIn) internal returns (uint256 amountOut) {
        TransferHelper.safeApprove(_tokenIn, address(_swapRouter), _amountIn);

        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: _tokenIn,
                tokenOut: _GHOAddress,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: _amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        amountOut = _swapRouter.exactInputSingle(params);
    }

    // function ghoFraction
    function calculateInvestedAmountForToken(uint256 _allocation, uint256 _investmentAmount) internal pure returns (uint256) {
        return (_investmentAmount / 10000) * _allocation;
    }

    // Invest function
    function invest(uint256 _planId, uint256 _investValue, uint256 _deadline, uint8 v, bytes32 r, bytes32 s) external returns (bool) {
        IERC20Permit(_GHOAddress).permit(msg.sender, address(this), _investValue, _deadline, v, r, s);

        TransferHelper.safeTransferFrom(_GHOAddress, msg.sender, address(this), _investValue);
        TransferHelper.safeApprove(_GHOAddress, address(_swapRouter), _investValue);

        InvestmentPlans memory plan = planDetails[_planId];
        address[] memory tokens = plan.tokens;
        uint256[] memory allocations = plan.allocations;

        uint256[] memory holdings = new uint256[](tokens.length);

        for (uint256 i = 0; i < tokens.length; i+= 1) {
            uint256 ghoInvestAmountForToken = calculateInvestedAmountForToken(allocations[i], _investValue);
            holdings[i] = _swapGHOToToken(ghoInvestAmountForToken, tokens[i]);
        }

        if (_userInvestments[msg.sender][_planId].totalGHOInvested == 0) {
            _userInvestments[msg.sender][_planId].totalGHOInvested = _investValue;
            _userInvestments[msg.sender][_planId].holdings = holdings;
        } else {
            uint256[] memory currentHoldings = _userInvestments[msg.sender][_planId].holdings;

            _userInvestments[msg.sender][_planId].totalGHOInvested += _investValue;
            uint256 _plan = _planId;
            uint256[] memory updatedHoldings = new uint256[](currentHoldings.length);

            for (uint256 j = 0; j < currentHoldings.length; j += 1) {
                updatedHoldings[j] = currentHoldings[j] + holdings[j];
            }

            _userInvestments[msg.sender][_plan].holdings = updatedHoldings;
        }

        emit InvestedInPlan(_planId, _investValue, msg.sender, tokens, holdings);
        return true;
    }

    // Withdraw function
    function withdraw(uint256 _planId) external returns (bool) {
        if (_userInvestments[msg.sender][_planId].totalGHOInvested <= 0) {
            revert NO_INVESTED_AMOUNT();
        }

        InvestmentPlans memory plan = planDetails[_planId];
        address[] memory tokens = plan.tokens;

        UserInvestment memory investment = _userInvestments[msg.sender][_planId];
        uint256[] memory holdings = investment.holdings;

        uint256 amountOut = 0;

        for (uint256 i = 0; i < holdings.length; i += 1) {
            amountOut += _swapTokenToGHO(holdings[i], tokens[i]);
        }

        delete _userInvestments[msg.sender][_planId];

        emit WithdrewPlan(_planId, amountOut, msg.sender, tokens, holdings);

        return true;
    }

    // get user investment details
    function getAllUserInvestmentDetails(uint256 _planId) external view returns (UserInvestment memory) {
        return _userInvestments[msg.sender][_planId];
    }
}