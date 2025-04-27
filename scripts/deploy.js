// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment(); // Wait for the deployment to be mined
  const counterAddress = await counter.getAddress(); // Get the contract address
  console.log("Counter deployed to:", counterAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});