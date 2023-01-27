<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel22.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Dex [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Dex!
  </p>
</div>

## Challenge
The goal of this level is for you to hack the basic DEX contract below and steal the funds by price manipulation.

> Solution: 
  [Dex Contract]() || [Hack Contract](https://goerli.etherscan.io/address/0x4913F0043Fc628c8aafde2b60c26e228774b5b68)
## Complementary information to solve the challenge

You will start with 10 tokens of token1 and 10 of token2. The DEX contract starts with 100 of each token.

You will be successful in this level if you manage to drain all of at least 1 of the 2 tokens from the contract, and allow the contract to report a "bad" price of the assets.

## Extra help
Normally, when you make a swap with an ERC20 token, you have to approve the contract to spend your tokens for you. To keep with the syntax of the game, we've just added the approve method to the contract itself. So feel free to use contract.approve(contract.address, <uint amount>) instead of calling the tokens directly, and it will automatically approve spending the two tokens by the desired amount. Feel free to ignore the SwappableToken contract otherwise.

  Things that might help:

* How is the price of the token calculated?
* How does the swap method work?
* How do you approve a transaction of an ERC20?
* Theres more than one way to interact with a contract!
* Remix might help
* What does "At Address" do

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
git checkout 22-dex
```

Then install dependencies

```
yarn
```
## Solution explained
The key to the solution is to really understand how `getSwapPrice` works in `Dex.sol`. You can use a pencil and paper and simulate how it works if visualization helps you. If you notice, when you trade all tokens for others, the price changes if you try again for another, then. How the contract pool has less and less token over time, you can get more token until one of the pool is empty.

| Number Transaction | Token1 Hack| Token2 Hack | Token1 Pool | Token2 Pool |
| ------------------ | ---------- | ----------- | ----------- | ----------- |
| 0   |10 | 10 | 100 | 100 |
| 1   | 0 | 20 | 110 | 90 |
| 2   |24 | 0  | 86  | 110 |
| 3   | 0 | 30 | 110 | 80 |
| 4   |41 | 0 | 69 | 110 |
| 5   | 0 | 65 | 110 | 45 |
| 6   |110 | 25 | 0 | 85 |

This is the flow representation of the`attack()` function for six transactions.

### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Use oracle for get the price.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
