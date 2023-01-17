<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel14.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Gatekeeper Two [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Gatekeeper Two!
  </p>
</div>

## Challenge
* Register as an entrant to pass this level.

> Solution: 
  [GateKeppper Two Contract](https://goerli.etherscan.io/address/0xfF42A4cCdfE5064651432064Ce3430bd7be8185b#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0xab82B4141716d558c7156eE729D62A246A145A97#internaltx)
## Complementary information to solve the challenge
* Remember what you've learned from getting past the first gatekeeper - the first gate is the same.
* The assembly keyword in the second gate allows a contract to access functionality that is not native to vanilla Solidity. See here for more information. The extcodesize call in this gate will get the size of a contract's code at a given address - you can learn more about how and when this is set in section 7 of the yellow paper.
* The ^ character in the third gate is a bitwise operation (XOR), and is used here to apply another common bitwise operation (see here). The Coin Flip level is also a good place to start when approaching this challenge.


## Extra help
With the complementary information, you got it!

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
git checkout 14-gatekeeper-two
```

Then install dependencies

```
yarn
```
## Solution explained
* `gateOne()` solution is the same as the gateOne of 13 challenges.
* `gateTwo()` If you look in the assembly documentation, you see the `extcodesize()` and get the size of the code at the `caller()` address in our case, an address with no data because it hasn't been completed yet.
* Just apply the math to get `0xffffffffffffffffffff` is the same as `type (uint64).max`
### Run Solution [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> If you use any function for hide information like these modifier. Well, you can see aren't safe.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
