//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import './Greeter.sol';


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    address savingAddress;
    constructor(uint256 initialSupply) ERC20 ("Blue Token", "BT"){
        _mint(msg.sender, initialSupply);
    }

    function decimals () public pure override returns (uint8) {
        return 0;
    }
}