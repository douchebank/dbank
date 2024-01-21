// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const swapRouterAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
  const GHOAddress = '0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f'; 

  const provider = new hre.ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = provider.getSigner();
  const dbank = await hre.ethers.deployContract("DBank", [swapRouterAddress, GHOAddress], signer);

  await dbank.waitForDeployment();

  console.log(`DBank deployed to ${dbank.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
