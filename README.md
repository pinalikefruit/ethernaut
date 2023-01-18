<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel15.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Naught Coin [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Naught Coin!
  </p>
</div>

## Challenge
* NaughtCoin is an ERC20 token and you're already holding all of them. The catch is that you'll only be able to transfer them after a 10 year lockout period. Can you figure out how to get them out to another address so that you can transfer them freely? Complete this level by getting your token balance to 0.

> Solution: 
  [Naught Coin Two Contract](https://goerli.etherscan.io/address/0x3f0fC311cC69c92148aa1E706061F68379e8B590#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x0c2BE8d56444b0a33c40EcD41fE27de12E799127)
## Complementary information to solve the challenge
* The [ERC20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) Spec
* The [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts) codebase

## Extra help
With the complementary information, you got it! See all the function in the ERC20 documentation.

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
git checkout 15-naught-coin
```

Then install dependencies

```
yarn
```
## Solution explained
1. You need Naught Coin to approve the full amount.
   ```
      await contract.approve(CONTRACT_ADDRESS_NAUGHT_COIN,BALANCE)
   ```
    This phrase can be displayed in the console on the ethernaut page.

2. When this is complete, you can run the following command.
### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Checkout all the function you import always.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
