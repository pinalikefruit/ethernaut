// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IDetectionBot {
    function handleTransaction(address user, bytes calldata msgData) external;
}

interface IForta {
    function raiseAlert(address user) external;
}

contract HackBot is IDetectionBot {
    IForta public fortaContract;

    constructor(address fortaAddress) {
        fortaContract = IForta(fortaAddress);
    }

    function handleTransaction(address user, bytes calldata msgData) public override {
        if (msg.sender != address(fortaContract)) {
            revert();
        }
        fortaContract.raiseAlert(user);
        msgData;
    }
}
