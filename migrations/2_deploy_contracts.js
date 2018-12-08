var Users = artifacts.require("./Users.sol");
var PowerCert = artifacts.require("./PowerCert.sol");

module.exports = function(deployer) {
  deployer.deploy(Users);
  deployer.deploy(PowerCert);
};
