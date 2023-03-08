//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Counter{
    uint256 public x;
    
    constructor(uint256 _x){
        x = _x;
    }
    function add(uint256 y)external returns(uint256){
        return  x = x + y ;
    }
}