<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel27.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Good Samaritan [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Good Samaritan!
  </p>
</div>

## Challenge
This instance represents a Good Samaritan that is wealthy and ready to donate some coins to anyone requesting it.

Would you be able to drain all the balance from his Wallet?

> Solution: 
  [Good Samaritan Contract](https://goerli.etherscan.io/address/0x96e0e6987347b0d50a43c93a0fc949a0b1edc1b7#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x96e0E6987347b0D50A43C93A0fc949a0B1eDC1B7#internaltx)
## Complementary information to solve the challenge
* [Solidity Custom Errors](https://blog.soliditylang.org/2021/04/21/custom-errors/)

<!-- ## Extra help -->


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
git checkout 27-good-samaritan
```

Then install dependencies

```
yarn
```
## Solution explained
If you follow the `requestDonation()` function at some point you will see `transfer()` and inside there is another instance for `notify()` we have control over this function, so in our contract with sets a sentence, and the First, the amount is equal to or less than 10, so `revert` when this happens, the function calls `transferRemainder()` and then we let the transfer of the entire amount pass to us.
### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> It is not safe to assume that the error was thrown by the immediate target of the contract call
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
