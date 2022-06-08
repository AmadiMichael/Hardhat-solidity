// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  //const Greeter = await hre.ethers.getContractAt("Greeter");
  //const greeter = await Greeter.deploy(1000000);

  //await greeter.deployed();

  //console.log("Greeter deployed to:", greeter.address);



  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(1000000);

  await token.deployed();

  console.log("MyToken deployed to:", token.address);


  const Bank = await hre.ethers.getContractFactory("Bank");
  const bank = await Bank.deploy(token.address);

  await bank.deployed();

  console.log("Bank deployed to:", bank.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
