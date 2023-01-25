<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel19.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Alien Codex [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Alien Codex!
  </p>
</div>

## Challenge
You've uncovered an Alien contract. Claim ownership to complete the level.

> Solution: 
  [Alien Codex Contract](https://goerli.etherscan.io/address/0xd7a02d6bbae36593d3decb572d5fd60e63099484#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x63727671639481aC27eFD1960B5530d01C216Daf)
## Complementary information to solve the challenge
* Understanding how array storage works
* Understanding ABI specifications
* Using a very underhanded approach


## Extra help
- Remember underflow term
- How you can modifie the storage ?
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
git checkout 19-alien-codex 
```

Then install dependencies

```
yarn
```
## Solution explained
it exploits the arithmetic underflow of array length, by expanding the array's bounds to the entire storage area of 2^256. The user is then able to modify all contract storage.
Essentially by setting the length of codex to the length of EVM storage, we gain the ability to modify any slot of entire EVM storage.

### Run Solution [automated solution]
 <!-- - `yarn test:unit` for local testing  -->
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Method retract doesn't have a check for int underflow.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
