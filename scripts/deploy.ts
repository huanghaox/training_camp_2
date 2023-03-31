import { ethers } from "hardhat";

async function main() {

  const ERC721Simon = await ethers.getContractFactory("Simon");
  const simon721 = await ERC721Simon.deploy();
  await simon721.deployed();
 
  console.log(`GettingStarted deployed to ${simon721.address}`);
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});