const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bank", function () {
  it("Should return 500 as amount", async function () {
    const MyToken = await ethers.getContractFactory("MyToken");
    const Bank = await ethers.getContractFactory("Bank");
    const mytoken = await MyToken.deploy(1000000);
    const bank = await Bank.deploy(mytoken.address);

    await mytoken.deployed();
    console.log (mytoken.address);
    await bank.deployed();
    console.log (bank.address);

    //expect(await mytoken.totalSupply()).to.equal("Hello, world!");

    const setAllowance = await mytoken.approve(bank.address, 5000);
    // wait until the transaction is mined
    await setAllowance.wait();
    //console.log (setAllowance);
    //expect(await mytoken.allowance()).to.equal(5000);

    const deposit = await bank.deposit(2000);
    await deposit.wait();
    expect(await bank.checkBalance()).to.equal(2000);
    console.log (await bank.checkBalance());


    const withdraw = await bank.withdraw(1500);
    await withdraw.wait();
    expect(await bank.checkBalance()).to.equal(500);
    console.log (await bank.checkBalance());

    //expect(await bank.checkBalance()).to.equal(500);
  });

  
});
