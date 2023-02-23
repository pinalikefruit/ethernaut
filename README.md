<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel8.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Vault [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Vault !
  </p>
</div>

## Challenge
* Unlock the vault to pass the level!

> Solution: 
  [Vault Contract](https://goerli.etherscan.io/address/0x86B408fD97E4BFc8e9c91aC7cd3d39c9d9505964)

## Complementary information to solve the challenge
You can do it.


## Extra help
It's important to remember that marking a variable as private only prevents other contracts from accessing it. State variables marked as private and local variables are still publicly accessible.
Information about [private storage](https://docs.soliditylang.org/en/v0.8.17/security-considerations.html?highlight=private%20store#private-information-and-randomness)

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
git checkout 08-vault
```

Then install dependencies

```
yarn
```
## Solution explained

How is it not possible to access a smart contract, You can use a `ethers.js` library and apply this method [getContractAt](https://docs.ethers.org/v5/api/providers/provider/#Provider-getStorageAt), you can see all the code in `test/ staging/vault.staging.test.ts`

### Run test [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:testnet` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

### Preventative Techniques

> Dont push any relevant or secret information in your smart contract.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
