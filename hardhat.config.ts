import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('@openzeppelin/hardhat-upgrades');
require('hardhat-abi-exporter');
let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })
// const privateKey = process.env.PRIVATE_KEY;
// const providerUrl = process.env.ALCHEM_KEY;

const config = {
  solidity: "0.8.18",
  networks: {
    dev: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      gas: 12000000,
      // accounts: {
      //   mnemonic: mnemonic,
      // },
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || `https://sepolia.infura.io/v3/${process.env.SEPOLIA_KEY}`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url: process.env.GOERLI_URL || `https://sepolia.infura.io/v3/${process.env.GOERLI_KEY}`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  abiExporter: {
    path: './deployments/abi',
    clear: true,
    flat: true,
    only: ["Bank", "ERC2612"],
    spacing: 2,
    pretty: true,
  },
};

export default config;