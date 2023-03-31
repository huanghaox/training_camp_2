const { expect } = require("chai");

describe("Counter", function () {
  let Counter;
  let counter;
  let owner;
  let otherAccount;
  async function init() {
    [owner, otherAccount] = await ethers.getSigners();

     Counter = await ethers.getContractFactory("Counter");
     counter = await Counter.deploy(0);
  }
  beforeEach(async function () {
    await init();
  });

  it("Owner Caller", async function () {
    expect(await counter.add(1));

  });
  
  it("otherAccount Caller", async function () {
    expect(await counter.connect(otherAccount).add(1));
  });
});