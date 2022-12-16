const { network } = require("hardhat");
const { ethers } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async () => {
  const PollingSystemFactory = await ethers.getContractFactory("PollingSystem");
  const PollingSystem = await PollingSystemFactory.deploy();

  if (network.config.chainId === 5) {
    await verify(PollingSystem.address, []);
  }
};
