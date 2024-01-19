// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import { ethers } from "ethers";
const hre = require("hardhat");

async function main() {
  const GHOAddress = ''; 
  const v2Factory = '';
  const v3Factory = ''; 
  const permit2 = '';

  const dbank = await hre.ethers.deployContract("DBank", [GHOAddress, v2Factory, v3Factory, permit2]);

  await dbank.waitForDeployment();

  console.log(`DBank deployed to ${dbank.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
