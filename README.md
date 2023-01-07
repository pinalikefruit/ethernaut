<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel3.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Coin Flip [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Coin Flip !
  </p>
</div>

## Challenge
* This is a coin flipping game where you need to build up your winning streak by guessing the outcome of a coin flip. To complete this level you'll need to use your psychic abilities to guess the correct outcome 10 times in a row.

> Solution: 
  [Coin Flip Contract](https://goerli.etherscan.io/address/0x22e324426b9c70a56eaF4a326a8f4ac7578Bc6E1#internaltx)
  [Attack Contract](https://goerli.etherscan.io/address/0xd2fa1fe9e943c4f27bec45de24d52d9db9e7ce94)

## Complementary information to solve the challenge
- See the Help page above, section "Beyond the console"

You already know what they talking about.

## Extra help
If you look at the code, we see two local functions: 
* `blockhash(uint blockNumber) returns (bytes32)` : hash of the given block when blocknumber is one of the 256 most recent blocks; otherwise returns zero
* `block.number (uint)` : current block number.

These function you can get the value, use it. 

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
git checkout 03-coinflip
```

Then install dependencies

```
yarn
```
## Solution explained

First, do not rely on block.timestamp or blockhash as a source of randomness, unless you know what you are doing.

In the blockchain not exist randomn number, for get random number you need an external provider, but in this case, you can predict the value, practical apply mirrow strategic, you can active your function and send the result for the block.


### Run test [automated solution]
 - `yarn test` for local testing 
 - `yarn deploy --network goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test-staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain




[goerli etherscan](https://goerli.etherscan.io/) and enter the address of the contract, you will see the creation transactions, the sending of ether that you have made and how you have emptied it.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com

Github profile: [https://github.com/pinalikefruit](https://github.com/pinalikefruit)





[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
