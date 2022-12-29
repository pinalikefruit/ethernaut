<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel4.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Telephone [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Telephone !
  </p>
</div>

## Challenge
* Claiming the property, we already know what it is about, only that another way must be applied.
> Solution: 
  [Telephone Contract](https://goerli.etherscan.io/address/0xcC0F2A66dB5471f0d55b14449Cb125D7812473A4#internaltx)
  [Attack Contract](https://goerli.etherscan.io/address/0xCe777a2C8299376473BBcBb48A5A2aE64259b75c)

## Complementary information to solve the challenge
- See the Help page above, section "Beyond the console"
[https://ethernaut.openzeppelin.com/help](https://ethernaut.openzeppelin.com/help)

This is what it tells us to use:

1. Use Remix to write the code and deploy it in the corresponding network See [Remix Solidity IDE](https://remix.ethereum.org/).
2. Setup a local truffle project to develop and deploy the attack contracts. See [Truffle Framework](http://truffleframework.com/).



## Extra help
You see the sentence

```solidity
(tx.origin != msg.sender)
```

I know you know msg.sender but, tx.origin and their differences?

By recommending that you use remix or truffle, it gives us the hint that perhaps to attack we need a contract.

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
git checkout 04-telephone
```

Then install dependencies

```
yarn
```
## Solution explained
1. An interface is created declaring the methods to be used
2. We take advantage of the tx.origin vulnerability and attack from another contract
3. We create the other contract, instantiating the Telephone contract for the attack and we send the parameters to make the change

### Run test [automated solution]
 - `yarn test` for local testing 
 - `yarn deploy --network goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test-staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

Use `msg.sender` instead of `tx.origin`


[goerli etherscan](https://goerli.etherscan.io/) and enter the address of the contract, you will see the creation transactions, the sending of ether that you have made and how you have emptied it.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com

Github profile: [https://github.com/pinalikefruit](https://github.com/pinalikefruit)





[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
