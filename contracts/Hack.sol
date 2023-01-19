// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

contract Hack {
    event Deploy_Success(address addr);

    function attack() external {
        bytes memory bytecode = hex"69602a60005260206000f3600052600a6016f3";
        address contractAddress;
        assembly {
            contractAddress := create(0, add(bytecode, 0x20), 0x13)
        }
        emit Deploy_Success(contractAddress);
    }
}

interface IMagicNum {
    function whatIsTheMeaningOfLife() external view returns (uint);
}
