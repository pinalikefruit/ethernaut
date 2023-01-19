<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel16.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Preservation [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Preservation!
  </p>
</div>

## Challenge
This contract utilizes a library to store two different times for two different timezones. The constructor creates two instances of the library for each time to be stored.

The goal of this level is for you to claim ownership of the instance you are given.

> Solution: 
  [Preservation Contract](https://goerli.etherscan.io/address/0xC8E6F29B67dd6bE598B8C1827D3785bDFf00A25A#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0xbfaf359d60d1e6396217444e930da66308129017)
## Complementary information to solve the challenge
* Look into Solidity's documentation on the delegatecall low level function, how it works, how it can be used to delegate operations to on-chain. libraries, and what implications it has on execution scope.
* Understanding what it means for delegatecall to be context-preserving.
* Understanding how storage variables are stored and accessed.
* Understanding how casting works between different data types.

## Extra help
With the complementary information, you got it! . Also, remember we pass a level similar call [delegation](https://github.com/pinalikefruit/ethernaut/tree/06-delegation) check .

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
git checkout 16-preservation
```

Then install dependencies

```
yarn
```
## Solution explained
Well, is a little different the previos challenge `delegation` .But, if you really understand how delegatecall work you don't have problem here. 
Remember the funciton `delegatecall()` preserves context and the storage layout must be the same for the contract calling delegatecall and the contract getting called.
You can check the solution in `contracts/Hack.sol`
### Run Solution [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Use stateless Library
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
