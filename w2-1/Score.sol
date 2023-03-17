//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

interface IScore {
    event ChangeScore(address,address,uint8);
    function addScore(address,uint8) external;
    function updateScore(address,uint8) external;
}

contract Score is IScore {
    address payable public owner;
    mapping(address => uint8) students;
    event TransferEvent(address from, address to, uint256 amount);

    constructor() {
        owner == msg.sender;
    }

    modifier Teacher {
        require(owner == msg.sender,"Caller must Teacher");
        _;
    }

    function BalanceOf() external view returns (uint256) {
        return students[msg.sender];
    }

    function addScore(address student,uint8 score) external Teacher {
        require(student!=address(0),"student must exists");
        require(score<=100,"score must <= 100");
        students[student]=score;
    }
    function updateScore(address student,uint8 score) external Teacher {
        require(student!=address(0),"student must exists");
        require(score<=100,"score must <= 100");
        students[student]=score;
    }
    
}