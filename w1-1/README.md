## 1 创建账号
>![创建账号]("./创建账号.png" "创建账号")
## 2 Goerli Transaction Hash
>0x6afb10bd53d416051563a50b80057889eb24e7d8273e37639769ae5da0a7a34a
## 3 Goerli Deploy 
>ContractAddress 0x7103F6782aF05275b2E31a1E14214259C350E44c
```
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
```