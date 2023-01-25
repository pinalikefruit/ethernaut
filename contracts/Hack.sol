// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IDex {}

contract Hack {
    IDex private immutable dex;

    constructor(address contractAddress) {
        dex = IDex(contractAddress);
    }
}
