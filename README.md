<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel21.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Shop [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Shop!
  </p>
</div>

## Challenge
Сan you get the item from the shop for less than the price asked?

> Solution: 
  [Shop Contract](0xd7E5bFA3A1960CE9B19edB293276B04a1dcc834C) || [Hack Contract](https://goerli.etherscan.io/address/0x9Adf15F9ED23e436Ba8Ef4C07DE1C97425339b34)
## Complementary information to solve the challenge

* Shop expects to be used from a Buyer
* Understanding restrictions of view functions

## Extra help
You can solve it alone

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
git checkout 21-shop
```

Then install dependencies

```
yarn
```
## Solution explained
Well, if you say that when you press `buy()` you can send a minimum price of 100, but when you save the price and the new variable, you can send another value in our case 0.
### Run Solution [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques
> Review what state change 
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
