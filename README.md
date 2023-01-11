<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel10.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Re-rentrancy [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Re-rentrancy !
  </p>
</div>

## Challenge
* The goal of this level is for you to steal all the funds from the contract.

> Solution: 
  [Re-entrancy Contract](https://goerli.etherscan.io/address/0x339EE89f01AA7E978df58B98B83a5456dcb599F1#internaltx) || [Attack Contract](https://goerli.etherscan.io/address/0x0ff8fc20f1ee1c43472ce918cd7b3f5c4c2f3945#internaltx)

## Complementary information to solve the challenge
* Untrusted contracts can execute code where you least expect it.
* Fallback methods
* Throw/revert bubbling
* Sometimes the best way to attack a contract is with another contract.
* See the Help page above, section "Beyond the console"


## Extra help
- You can push function in fallback methods
- Check reentrancy attack docs like [solidity docs](https://docs.soliditylang.org/en/v0.8.17/security-considerations.html?highlight=re-entrance#re-entrancy)
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
git checkout 10-re-entrancy
```

Then install dependencies

```
yarn
```
## Solution explained
  The bugs is in `withdraw()` function, you update the balance before you send funds.
### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

* If you use `<0.8.0` version in pragma, you need protect by reentrance attack
* Use the [Checks-Effects-Interations Pattern](https://docs.soliditylang.org/en/develop/security-considerations.html#use-the-checks-effects-interactions-pattern)
* Use modifier [ReentrancyGuard](https://docs.openzeppelin.com/contracts/2.x/api/utils#ReentrancyGuard) or [PullPayment](https://docs.openzeppelin.com/contracts/2.x/api/payment#PullPayment).
* `transfer` and `send` are no longer recommended solutions as they can potentially break contracts after the Istanbul hard fork


## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
