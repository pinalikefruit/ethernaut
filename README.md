<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel25.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Motorbike [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Motorbike!
  </p>
</div>

## Challenge
Ethernaut's motorbike has a brand new upgradeable engine design.

Would you be able to selfdestruct its engine and make the motorbike unusable ?
> Solution: 
 [Engine Contract](https://goerli.etherscan.io/address/0x8c8f9730c98140f4ee73aa3b40ee25d23f80214d#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x8e639e7144726337ea673b35e2385b1c4F95c561)
## Complementary information to solve the challenge
* [EIP-1967](https://eips.ethereum.org/EIPS/eip-1967)
* [UUPS upgradeable pattern](https://forum.openzeppelin.com/t/uups-proxies-tutorial-solidity-javascript/7786)
* [Initializable contract](https://github.com/OpenZeppelin/openzeppelin-upgrades/blob/master/packages/core/contracts/Initializable.sol)

## Extra help
If you wanna understand how proxy work I recommended  this video by Patrick [Proxy seccion - Hardhat](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=103991s)  and inside the video, you can find more resources.

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
git checkout 25-motorbike
```

Then install dependencies

```
yarn
```
## Solution explained
- First you need the implementation address in our case Engine Contract, two ways for get it. 
  You can see what other contract is deployed in etherscan and the other way if you remember there is a special place for implementation in specific slot. (see `motorbiiker.staging.test.ts`)
- When call `initialize()` we convert in `upgrader`. Then, we can call to `upgradeToAndCall()` and authorize for new implementation and finally call selfdestruct() in our contract.

### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - Update contract address inside `helper-hardhat-config.ts` file.
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Never leave implementation contracts uninitialized
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
