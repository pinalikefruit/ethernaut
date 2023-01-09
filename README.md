<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel7.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Force [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Force !
  </p>
</div>

## Challenge
* The goal of this level is to make the balance of the contract greater than zero.

> Solution: 
  [Force Contract](https://goerli.etherscan.io/address/0x49dC44491E99D9F272152CA9cbE433D1c7D9639E#internaltx) ||
  [Hack Contract](https://goerli.etherscan.io/address/0x62708240dfcb966BBC37C495C0F6759337c84dAd)

## Complementary information to solve the challenge
  Things that might help:

* Fallback methods
* Sometimes the best way to attack a contract is with another contract.
* See the Help page above, section "Beyond the console"


## Extra help
Well, about the complementary information, here in the last challenge we are talk about a lot. So, extra help is looking for `selfdestruct()` function. 

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
git checkout 07-force
```

Then install dependencies

```
yarn
```
## Solution explained
`selfdestruct()` is an interesting topic, because you can use it to push ether force, even your contract has no fallback function, also if you push the rollback function it doesn't work.

So the solution is to insert a `self-destruct()` in your attack function and pass as argument the address you want to attack.
### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

> It is important not to count on the invariant address(this).balance == 0 for any contract logic.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
