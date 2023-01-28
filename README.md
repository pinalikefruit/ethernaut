<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel23.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Dex Two [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Dex Two!
  </p>
</div>

## Challenge
This level will ask you to break DexTwo, a subtlely modified Dex contract from the previous level, in a different way.

You need to drain all balances of token1 and token2 from the DexTwo contract to succeed in this level.

You will still start with 10 tokens of token1 and 10 of token2. The DEX contract still starts with 100 of each token.

> Solution: 
  [Dex Two Contract](https://goerli.etherscan.io/address/0x99852a9f81CA6e4D99d5096F954335E34314e935#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x943BBBFc68B4cb0d6c03b02e22cc777ac0e928A4) ||[Pina Token](https://goerli.etherscan.io/address/0xa7e266c7B386271B50E2878cd66FAF0250B2d916)
## Complementary information to solve the challenge

How has the swap method been modified?

## Extra help
Maybe you can swap you own token...

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
git checkout 23-dex-two
```

Then install dependencies

```
yarn
```
## Solution explained
If check the different between the contracts Dex and DexTwo, you can get this  sentence is out
```
require(
            (from == token1 && to == token2) || (from == token2 && to == token1),
            "Invalid tokens"
        );
```
If not check the token1 and token2 address, you can deploy and swap any token ERC20. So, you can create any token and try to swap all token1 and token2 of the contract.
### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Don't allow any account swap any token.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
