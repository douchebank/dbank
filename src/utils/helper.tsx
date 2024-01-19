import { sha256 } from "js-sha256";
import supportedChains from "../constants/chains";
import erc20ABI from "../constants/erc20ABI";
import { ethers } from "ethers";

export const getItemFromStorage: any = (
  key: string,
  storage = "localStorage"
) => {
  const _window = window as any;
  const item: any = _window[storage].getItem(key);
  let result = null;

  try {
    result = item ? JSON.parse(item) : null;
  } catch {
    result = item;
  }
  return result;
};

export const setItemInStorage: any = (
  name: any,
  data: any,
  storage = "localStorage"
) => {
  const _window = window as any;

  _window[storage].setItem(name, JSON.stringify(data));
};

export const removeItemFromStorage: any = (
  name: any,
  storage = "localStorage"
) => {
  const _window = window as any;

  _window[storage].removeItem(name);
};

export const getChainDetails: any = (chainId: number) => {
  let chainData;

  supportedChains.forEach((chain: any) => {
    if (chain.chainId === chainId) {
      chainData = chain;
    }
  });

  return chainData;
};


const isValidContract = async (address: string, provider: any) => {
  const code = await provider.getCode(address);

  if (code === "0x") {
    return false;
  }

  return true;
};

export const getTokenData = async (
  tokenAddress: string,
  provider: any,
  userAddress: string
) => {
  const isValid = await isValidContract(tokenAddress, provider);

  if (!isValid) {
    return null;
  }

  const contract = new ethers.Contract(tokenAddress, erc20ABI, provider);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();

  let balance = await contract.balanceOf(userAddress);

  balance = ethers.utils.formatUnits(balance, decimals);

  return { name, symbol, balance, decimals };
};

export const getTokenBalance = async (
  tokenAddress: string,
  provider: any,
  userAddress: string
) => {
  const contract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  const decimals = await contract.decimals();

  let balance = await contract.balanceOf(userAddress);

  balance = ethers.utils.formatUnits(balance, decimals);

  return balance.toString();
};

export const getCoinBalance = async (
  userAddress: string,
  provider: any,
  setBalance: any
) => {
  const balance = await provider.getBalance(userAddress);

  setBalance(ethers.utils.formatEther(balance));
};

export const getShortDisplayString: any = (address: string) => {
  const firstFourDigit = address?.slice(0, 4);
  const lastFourDigit = address?.slice(Number(address?.length) - 4);

  return (
    <>
      {firstFourDigit}...{lastFourDigit}
    </>
  );
};


export const generateSHA256Hash = (data: string) => sha256(data);
