## 部署并验证sepolia测试网
>https://sepolia.etherscan.io/address/0xAdF96FfD8E84D19c0EBDd11EF0C222E66208177B#code
```
//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
// Author: @hhxsimon
contract Counter {
    uint256 public x;
    address public owner;
    constructor(uint256 _x) {
        x = _x;
        owner = msg.sender;

    }

    modifier OnlyOwner() {
        require(msg.sender == owner,"Caller:Only Owner");
        _;
    }
        
    

    function add(uint256 y) external OnlyOwner returns (uint256) {
        return x = x + y;
    }
}
```