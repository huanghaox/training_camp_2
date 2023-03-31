import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config()
const privateKey = process.env.PRIVATE_KEY;
const providerUrl = process.env.ALCHEM_KEY;
 
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url:process.env.SEPOLIA_URL || `https://sepolia.infura.io/v3/${process.env.SEPOLIA_KEY}`,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url:process.env.GOERLI_URL || `https://sepolia.infura.io/v3/${process.env.GOERLI_KEY}`,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  }
};
 
export default config;