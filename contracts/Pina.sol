// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pina is ERC20, Ownable {
    constructor() ERC20("Pina", "PINA") {}

    function mint(
        address contractAddress,
        address hack,
        uint256 amountA,
        uint256 amountB
    ) public onlyOwner {
        _mint(contractAddress, amountA);
        _mint(hack, amountB);
    }
}
