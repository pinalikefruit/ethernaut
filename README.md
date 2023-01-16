<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel13.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Gatekeeper One [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Gatekeeper One!
  </p>
</div>

## Challenge
* Make it past the gatekeeper and register as an entrant to pass this level.

> Solution: 
  [GateKeppper Contract](https://goerli.etherscan.io/address/0xEf7832361768cC85E3C5c7A79374a4825e393b11#internaltx) || [Attack Contract](https://goerli.etherscan.io/address/0x34747ebf530d5cb162fbab50da8338d33ab7fb87)
## Complementary information to solve the challenge
* Remember what you've learned from the Telephone and Token levels.
* You can learn more about the special function gasleft(), in Solidity's documentation.


## Extra help
You need extra tool for calculate gateTwo modifier. Recomendation [Foundry](https://github.com/foundry-rs/foundry)
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
git checkout 13-gatekeeper-one
```

Then install dependencies

```
yarn
```
## Solution explained
* `gateOne()` is resolved in the [telephone challenge](https://github.com/pinalikefruit/ethernaut/tree/04-telephone)
* The hard part for me, in this challenge is the `gateTwo()` modifier, the Hardhat tool doesn't work as expected to calculate the remaining gas, it works on the local network, but not on the testnet. So, I can use *foundry framework* and push all the code to test it in this repository [get gaslef()](https://github.com/pinalikefruit/gatekeeper-one-test)
* You must understand [explicit conversion](https://docs.soliditylang.org/en/latest/types.html#explicit-conversions)

>_Note: depending on solidity version you use, gas use can change_
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
