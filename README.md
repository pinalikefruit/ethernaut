<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel26.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">DoubleEntryPoint [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge DoubleEntryPoint!
  </p>
</div>

## Challenge
This level features a CryptoVault with special functionality, the sweepToken function. This is a common function used to retrieve tokens stuck in a contract. The CryptoVault operates with an underlying token that can't be swept, as it is an important core logic component of the CryptoVault. Any other tokens can be swept.

The underlying token is an instance of the DET token implemented in the DoubleEntryPoint contract definition and the CryptoVault holds 100 units of it. Additionally the CryptoVault also holds 100 of LegacyToken LGT.

In this level you should figure out where the bug is in CryptoVault and protect it from being drained out of tokens.

The contract features a Forta contract where any user can register its own detection bot contract. Forta is a decentralized, community-based monitoring network to detect threats and anomalies on DeFi, NFT, governance, bridges and other Web3 systems as quickly as possible. Your job is to implement a detection bot and register it in the Forta contract. The bot's implementation will need to raise correct alerts to prevent potential attacks or bug exploits.

> Solution: 
  [DoubleEntryPoint Contract](https://goerli.etherscan.io/address/0xd43B3478Ebabe55aFB7C1367c448B142B10fEc25)) || [Hack Contract](https://goerli.etherscan.io/address/0x649CD6daDc4eD44aa760B13249c8a762ebFAeeBd)
## Complementary information to solve the challenge
* How does a double entry point work for a token contract?

## Extra help
A double entry point for a token contract refers to a design pattern where the contract has two separate functions for the same action, one for regular transactions and one for token transfers. The idea is to separate the logic of token transfers from the rest of the contract's functionality in order to improve security and performance. For example, a contract might have a "transfer" function that can be called by anyone, but a separate "transferFrom" function that can only be called by approved users or smart contracts. This allows for more fine-grained control over token transfers and can help prevent potential vulnerabilities.

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
git checkout 26-double-entry-point ▓
```

Then install dependencies

```
yarn
```
## Solution explained
We can build a contract that extends Forta IDetectionBot and plug it into the DoubleEntryPoint. By doing that, we should be able to prevent the exploit when the Vault sweepToken trigger the `LegacyToken.transfer()` that will trigger the `DoubleEntryPoint.delegateTransfer()` that will trigger (before executing the function code) the fortaNotify function modifier.

`await contract.forta()`
Then, setDetectionBot in Forta contract with the bot address. 

### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Use Forta for prevent attack.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
