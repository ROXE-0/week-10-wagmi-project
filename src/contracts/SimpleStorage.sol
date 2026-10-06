// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStorage {
    uint256 private number;

    function getNumber() external view returns (uint256) {
        return number;
    }

    function setNumber(uint256 newNumber) external {
        number = newNumber;
    }
}