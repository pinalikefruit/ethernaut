<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel17.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Recovery [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Recovery!
  </p>
</div>

## Challenge
A contract creator has built a very simple token factory contract. Anyone can create new tokens with ease. After deploying the first token contract, the creator sent 0.001 ether to obtain more tokens. They have since lost the contract address.

This level will be completed if you can recover (or remove) the 0.001 ether from the lost contract address.

> Solution: 
  [SimpleToken Contract](https://goerli.etherscan.io/address/0x0ef6e9f5a1e0c7ac4b3732c44c272f4c27231f04#internaltx) 
## Complementary information to solve the challenge
You have completed a similar challenge using `selfdestruct()` check againg.

## Extra help
Use ABI of simpleContract.

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
git checkout 17-recovery
```

Then install dependencies

```
yarn
```
## Solution explained
We see when I get a new instance the contract creates a new contract call simpleToken, well if I get the contract address it's the same ABI then we can fire the `destroy()` function and we can send the rest of the money to another account . You can see the resolution in `test/recovery.staging.test.ts`
### Run Solution [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> For activate `selfdestruct()` use a owner modifier.
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
