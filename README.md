<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel6.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Delegation [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Delegation !
  </p>
</div>

## Challenge
* The goal of this level is for you to claim ownership of the instance you are given.

> Solution: 
  [Delegation Contract](https://goerli.etherscan.io/address/0x4d94F9efFb9A63738D61b13E07bCFf45F3cae7ed#internaltx)
  [Hack Contract](https://goerli.etherscan.io/address/0xdcdD7e83df672E56007022D3B7BD1f56a70e7248#internaltx)

## Complementary information to solve the challenge
  Things that might help:

* Look into Solidity's documentation on the delegatecall low level function, how it works, how it can be used to delegate operations to on-chain libraries, and what implications it has on execution scope.
* Fallback methods
* Method ids


## Extra help
Here you can find the documentation for each one.
* [Delegatecall Solidity](https://docs.soliditylang.org/en/v0.8.17/introduction-to-smart-contracts.html?highlight=delegatecall#delegatecall-and-libraries)
* [Fallback methods](https://docs.soliditylang.org/en/v0.8.17/contracts.html?#fallback-function)
* [Method ids](https://docs.ethers.org/v5/api/utils/hashing/#utils-id)

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
git checkout 06-delegation
```

Then install dependencies

```
yarn
```
## Solution explained
I explain it in three different ways:
* <b>1. SOLUTION</b> 
You can copy/paste the code in remix and click the `pwd()` function, just edit gasLimit in your metamask with about 300,000.
* <b>2. SOLUTION</b> 
 You can run `test:unit` and see how you can change the property using the calling function and with a smart contract.
* <b>3. SOLUTION</b>
You can run `test:staging` and see how it can take ownership of sending a transaction, the additional in this case is that you need to create a msg.data, for this reason it uses an ethers.js id method.
### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

> Use stateless Library
The delegatecall function is a powerful feature, but a dangerous one, and must be used with extreme care.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
