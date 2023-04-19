const { ethers, upgrades } = require("hardhat");
const { getImplementationAddress } = require('@openzeppelin/upgrades-core');

async function main() {
  //部署逻辑合约V1  
  const ERC20SIMONV1 = await ethers.getContractFactory("ERC20SimonV1");
  const ERC20simonv1 = await ERC20SIMONV1.deploy();
  await ERC20simonv1.deployed();
    

  console.log(`MyERC20: npx hardhat verify ${ERC20simonv1.address} `);

  // 逻辑合约V2 
  const ERC20SIMONV2 = await ethers.getContractFactory("ERC20SimonV2");
  // 部署代理 TransparentUpgradeableProxy
  const upgraded = await upgrades.upgradeProxy(ERC20simonv1.address, ERC20SIMONV2);
  // 部署代理管理员  ProxyAdmin
  let implAddress = await getImplementationAddress(ethers.provider, upgraded.address);

  console.log(`Please verify MyERC20V2: npx hardhat verify ${implAddress} `);
}
 

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});