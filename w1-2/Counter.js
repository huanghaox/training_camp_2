const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Counter", function () {
  async function deployOneYearLockFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    return { counter, owner, otherAccount };
  }

  describe("Caller", function () {
    it("Owner Caller", async function () {
      const { owner, counter } = await loadFixture(deployOneYearLockFixture);
      
      await expect(counter.connect(owner).add(1));
    });
    it("otherAccount Caller", async function () {
      const { owner,otherAccount, counter } = await loadFixture(deployOneYearLockFixture);
      
      await expect(counter.connect(otherAccount).add(1).to.be.revertedWith("Caller:Only Owner"));
    });
  });
});