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

> Solution: [tx](https://goerli.etherscan.io/address/0x77e443e2a13DE32EAE246f2253dCDB67b1728A3c)

## Complementary information to solve the challenge
- See the Help page above, section "Beyond the console"




## Extra help

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
git checkout fal1out/
```

Then install dependencies

```
yarn
```
## Solution explained
We see that the assignment of the owner is done through the constructor method, where previously it was agreed to call the contract the same, but in this case there is an error and they are not the same, so when the contract is displayed there is no owner. and even if the owner takes over, then it can be easily changed, since it is public and does not have a modifier.

Smart contracts are very safe, right?

So to get the property we just have to send any amount of ether to the `fal1out()` function, you can send 1 wei.

In the previous challenge we saw how to send ether but they recommend using remix, so I propose two options to solve it.

### Run test [automated solution]
 - `yarn test` for local testing 
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`

 

> You can see all code explain

### Solution interanting with the console
    
  1. Send ether through the console
    
     ```solidity
     await contract.Fal1out({value: toWei("0.000000001")})
     ```
    
  2. If you check, you already have ownership
    
     ```solidity
     await contract.owner()
     ```
    
  3. You can give it to check instance

### Solution interacting with remix
* Send ether using remix 
* Check that the owner has changed 
* You can go back to the ethernaut page and click check instance



[goerli etherscan](https://goerli.etherscan.io/) and enter the address of the contract, you will see the creation transactions, the sending of ether that you have made and how you have emptied it.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com

Github profile: [https://github.com/pinalikefruit](https://github.com/pinalikefruit)





[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
