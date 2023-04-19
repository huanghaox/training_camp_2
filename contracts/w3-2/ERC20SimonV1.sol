// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract ERC20SimonV1 is ERC20Upgradeable {

  function initialize() external initializer {
      __ERC20_init("ERC20Simon", "ERC20Simon");

      _mint(msg.sender, 100000e18);
  }

}