<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel11.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Elevator [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Elevator!
  </p>
</div>

## Challenge
* Take the elevetor to the top

> Solution: 
  [Elevator Contract](https://goerli.etherscan.io/address/0x4D8F5690123d7bBDbfDD679b2b1e4A1E63B1e450#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0x57F134A224C5a9Fc3ed8B95a6Dd1c914d4D00195#code)

## Complementary information to solve the challenge
* Sometimes solidity is not good at keeping promises.
* This Elevator expects to be used from a Building.


## Extra help
If possible call a function and returns two different value?
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
git checkout 11-elevator
```

Then install dependencies

```
yarn
```
## Solution explained
1. The elevator contract using `msg.sender` for example Building, so you have full control of `isLastFloor()`,here is the key.
2. Check `Hack.sol` for the complete solution.
### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> You can use the `view` or `pure` function modifier on an interface in order to prevent state modifications. 
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
