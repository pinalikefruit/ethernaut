<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel5.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Token [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Token !
  </p>
</div>

## Challenge
* You are given 20 tokens to start with and you will beat the level if you somehow manage to get your hands on any additional tokens. Preferably a very large amount of tokens.
> Solution: 
  [Token Contract](https://goerli.etherscan.io/address/0xac314f384538e00ab2aa590bb80ef4d55c385dae#internaltx)
  [Attack Contract](https://goerli.etherscan.io/address/0x46565Cb842d375D05218E40Bcf71805A8e120b5d#code)

## Complementary information to solve the challenge
  Things that might help:

* What is an odometer?

Why do they ask us about the odometer? Well, when you use a car, you see the odometer, and when it reaches its maximum capacity (e.g. 9999), it starts again at (e.g.) 0000. Maybe this example can help you.


## Extra help
Read about the SafeMath library at OpenZeppelin.

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to install it with npm

## Setup

Clone this repo

```
git clone https://github.com/pinalikefruit/ethernaut
cd ethernaut
git checkout 05-token
```

Then install dependencies

```
yarn
```
## Solution explained
1. Create a attack smart contract
2. Use a interface of Token for interactive with token contract.
3. Overflows are very common in solidity and must be checked, so here is the exploit 
4. You can find all of the solutions in the `attack()` function in the `Attack.sol` file. 

### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

Use Openzeppelin SafeMath library

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
