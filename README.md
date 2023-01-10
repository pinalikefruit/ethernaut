<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel9.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">King [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge King !
  </p>
</div>

## Challenge
* Your goal is to break it!

> Solution: 
  [King Contract](https://goerli.etherscan.io/address/0x63922d77010d4374e14e720b2ad4b1dc3be6f8ef#internaltx) || [Attack Contract](https://goerli.etherscan.io/address/0x91945B1247c95260eE74D78b8Fcc270f2D088221#internaltx)

<!-- ## Complementary information to solve the challenge -->



## Extra help
- Use a smart contract for this challenge and remember that without the "fallback" feature a smart contract cannot receive funds.
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
git checkout 09-king
```

Then install dependencies

```
yarn
```
## Solution explained
  If you send at least the prize amount to the king contract and your hack contract dont have any fallback function, it is impossible for the king contract to send fund when another participant try to get the crown.

### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

> Dont push any relevant or secret data in your smart contract NEVER.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
