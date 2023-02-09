<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel24.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Puzzle Wallet [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Puzzle Wallet!
  </p>
</div>

## Challenge
Nowadays, paying for DeFi operations is impossible, fact.

A group of friends discovered how to slightly decrease the cost of performing multiple transactions by batching them in one transaction, so they developed a smart contract for doing this.

They needed this contract to be upgradeable in case the code contained a bug, and they also wanted to prevent people from outside the group from using it. To do so, they voted and assigned two people with special roles in the system: The admin, which has the power of updating the logic of the smart contract. The owner, which controls the whitelist of addresses allowed to use the contract. The contracts were deployed, and the group was whitelisted. Everyone cheered for their accomplishments against evil miners.

Little did they know, their lunch money was at risk…

  You'll need to hijack this wallet to become the admin of the proxy.

> Solution: 
 [Puzzle Wallet Contract](https://goerli.etherscan.io/address/0xb1D4cB5eC52F9BB2a713BAF6E3aB1CE1Ca04Eda7#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x3Eb19B1da17B6E36f80EB30b18E821bB1f256504)
## Complementary information to solve the challenge
* Understanding how delegatecalls work and how msg.sender and msg.value behaves when performing one.
* Knowing about proxy patterns and the way they handle storage variables.

## Extra help
If you wanna understand how proxy work I recommended  this video by Patrick [Proxy Hardhat](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=103991s)  and inside the video, you can find more resources.

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
git checkout 24-puzzle-wallet
```

Then install dependencies

```
yarn
```
## Solution explained
I explained how the attack work in the `contracts/Hack.sol` step by step.
### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - Update contract address inside `helper-hardhat-config.ts` file.
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Audit your contract 
Using proxy contracts is highly recommended to bring upgradeability features and reduce the deployment's gas cost. However, developers must be careful not to introduce storage collisions
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
