<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel28.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Gatekeeper Three [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Gatekeeper Three!
  </p>
</div>

## Challenge
Cope with gates and become an entrant.

> Solution: 
  [Gatekeeper three Contract](https://goerli.etherscan.io/address/0xF8Da680583bDf457609db462DBbfd2bcCF22BA10#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x74b52a10493f1baf4b74013b7728e0dd0903af15)
## Complementary information to solve the challenge

* Recall return values of low-level functions.
* Be attentive with semantic.
* Refresh how storage works in Ethereum.
## Extra help

See [Gatekeeper One](https://github.com/pinalikefruit/ethernaut/tree/13-gatekeeper-one) and [GateKeeper Two](https://github.com/pinalikefruit/ethernaut/tree/14-gatekeeper-two)
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
git checkout 28-gatekeeper-three
```

Then install dependencies

```
yarn
```
## Solution explained
All solution is split in two fase, you can see all the solution in `contract/Hack.sol`
### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Don't set sensitive information as password in the blockchain.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
