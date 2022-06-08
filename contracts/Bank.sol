//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./MyToken.sol";




interface IMyToken {
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    function transfer(address to, uint256 amount) external returns (bool);

}


contract Bank  {

    address owner = msg.sender;

    //address addres = 0x37759B48620602EdcCe38667EB14A2aD63B14B08;

    MyToken addres;

    constructor (address _address) {
        addres = MyToken(_address);
    }

    

  mapping (address => uint) private balance;

  function setAddress(address _address) public {
    addres = MyToken(_address);
  }


  /* IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 */

    function deposit (uint amount) public {
        //address sender = msg.sender;
        addres.transferFrom(msg.sender, address(this), amount);
        
        balance[msg.sender] += amount;
        
    }


    function withdraw (uint amount) public {
        //address sender = msg.sender;
        require (balance[msg.sender] >= amount, 'insufficient funds');
        addres.transfer(msg.sender, amount);
        balance[msg.sender] -= amount;
    }

    function checkBalance () public view returns (uint) {
        return balance [msg.sender];
    }

}
