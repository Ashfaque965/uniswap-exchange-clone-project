require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      // Configuration for the local Hardhat Network
      chainId: 31337,
      // Enable auto-mining for better development experience
      mining: {
        auto: true,
        interval: 1000
      },
      // Gas configuration
      gas: "auto",
      gasPrice: "auto",
      gasMultiplier: 1,
      // Disable block gas limit for testing
      allowUnlimitedContractSize: true,
      // Forking configuration (commented out for now to use local node)
      // forking: {
      //   url: "https://eth-mainnet.g.alchemy.com/v2/o5TS_1YHBjoCof4JP9TfSkoH6x5JLWEI",
      //   blockNumber: 15000000,
      // },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      // Set higher gas limits for local development
      gas: 2100000,
      gasPrice: 8000000000, // 8 gwei
      allowUnlimitedContractSize: true,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};