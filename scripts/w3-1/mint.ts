import { ethers } from "hardhat";
 
async function main() {
  const [owner] = await ethers.getSigners();
  console.log(owner.address);
  const Simon721 = await ethers.getContractFactory("Simon");
  const Simon721Address = await Simon721.attach('0xdFCc8490804542c2E0FA2A6cC193e2F207a801B3');
  // const tx = await Simon721Address.mint(owner.address, "123");
  // await tx.wait();
  const balanceOf = await Simon721Address.balanceOf(owner.address);
  const uri = await Simon721Address.tokenURI(1);
  //  const uri = await Simon721Address.ownerOf(2);

  console.log(balanceOf);
  console.log(uri);
  //  console.log(tx);
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});