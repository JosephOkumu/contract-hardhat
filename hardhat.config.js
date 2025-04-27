require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Ensure this line is present

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    liskSepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      chainId: 4202,
      accounts: [process.env.PRIVATE_KEY],
    },
    liskMainnet: {
      url: "https://rpc.api.lisk.com",
      chainId: 204,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};