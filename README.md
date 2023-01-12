<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel12.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Privacy [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Privacy!
  </p>
</div>

## Challenge
* The creator of this contract was careful enough to protect the sensitive areas of its storage. Unlock this contract to beat the level

> Solution: 
  [Privacy Contract](https://goerli.etherscan.io/address/0xBcAED4F591B6DA3Ce3cB0C3b2Bd80d009e99A37D)
## Complementary information to solve the challenge
* Understanding how storage works
* Understanding how parameter parsing works
* Understanding how casting works


## Extra help
Remember that metamask is just a commodity. Use another tool if it is presenting problems. Advanced gameplay could involve using remix, or your own web3 provider
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
git checkout 12-privacy
```

Then install dependencies

```
yarn
```
## Solution explained
Well, we have knowledge for the resolution in the vault challenge about private data storage, here is no different, in `contract/Privacy.sol` in the comment line I push the slot location for each variable is easier to understand where, take any variable from this contract and then you will get the value simply reduced to 16 bytes.

### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> 
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
