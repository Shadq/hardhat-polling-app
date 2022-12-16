const { expect, assert } = require("chai");
const { network, ethers } = require("hardhat");

describe("PollingSystem", () => {
  let PollingSystemFactory, PollingSystem, senderAddress;
  beforeEach(async () => {
    PollingSystemFactory = await ethers.getContractFactory("PollingSystem");
    PollingSystem = await PollingSystemFactory.deploy();
    senderAddress = await PollingSystem.signer.address;
  });

  describe("Become Poller function", () => {
    it("Should revert if we are already pollers", async () => {
      const poller = await PollingSystem.becomePoller();
      await expect(PollingSystem.becomePoller()).to.be.reverted;
    });
    it("Should verify that the sender address and the new poller address are the same", async () => {
      const poller = await PollingSystem.becomePoller();
      const pollersMapping = await PollingSystem.pollers(senderAddress);
      assert.equal(pollersMapping, senderAddress);
    });
  });

  describe("Create Poll function", () => {
    it("Should revert if we arent pollers", async () => {
      await expect(PollingSystem.createPoll("idea")).to.be.reverted;
    });
  });

  describe("Vote function function", () => {
    it("Should revert if we arent pollers", async () => {
      await expect(PollingSystem.createPoll("idea")).to.be.reverted;
    });
  });
});
