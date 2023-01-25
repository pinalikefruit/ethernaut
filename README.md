<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel20.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Denial [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Denial!
  </p>
</div>

## Challenge
This is a simple wallet that drips funds over time. You can withdraw the funds slowly by becoming a withdrawing partner.

If you can deny the owner from withdrawing funds when they call withdraw() (whilst the contract still has funds, and the transaction is of 1M gas or less) you will win this level.

> Solution: 
  [Denial Contract](https://goerli.etherscan.io/address/0x1f60d8828991fE4a8920395BECc33e8AB02C82D7#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x8038D01b0580A21fc0174ca196DD609BFD90fA9F#code)
<!-- ## Complementary information to solve the challenge
 -->


## Extra help
* Remember [King Challenge](https://github.com/pinalikefruit/ethernaut/tree/09-king)
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
git checkout 20-denial
```

Then install dependencies

```
yarn
```
## Solution explained
Well, the idea is to try to spend all the gas when the contract tries to send the amount to the partner. You can see the function inside a `receive()` callback function, a while loop than always is true.

### Run Solution [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> If you are using a low level call to continue executing in the event an external call reverts, ensure that you specify a fixed gas stipend. For example call.gas(100000).value().

Typically one should follow the checks-effects-interactions pattern to avoid reentrancy attacks, there can be other circumstances (such as multiple external calls at the end of a function) where issues such as this can arise.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
