const BusSafe = artifacts.require("BusSafe");

module.exports = function (deployer) {
  deployer.deploy(BusSafe);
};
