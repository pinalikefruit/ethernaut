// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

error Hack__NoContractAddress();

contract Hack {
    address contractAddress;

    constructor(address magicAddress) {
        // The creation bytecode, you can find in README.md
        bytes memory bytecode = hex"69602a60005260206000f3600052600a6016f3";
        address deployAddress;
        assembly {
            deployAddress := create(0, add(bytecode, 0x20), 0x13)
            /** The first argument is the amount, in our case equal to zero
             * Second argument is we ignore the first 32 bytes  in hex 20
             * third argument  is the size 19 bytes in hex is 13
             */
        }
        contractAddress = deployAddress;
        IMagic(magicAddress).setSolver(deployAddress);
    }

    function checkMagicNumber() public view returns (uint256) {
        if (contractAddress == address(0)) {
            revert Hack__NoContractAddress();
        }
        uint256 magicNumber = IMagicNum(contractAddress).whatIsTheMeaningOfLife();
        return magicNumber;
    }
}

interface IMagicNum {
    function whatIsTheMeaningOfLife() external view returns (uint);
}

interface IMagic {
    function setSolver(address _solver) external;
}
