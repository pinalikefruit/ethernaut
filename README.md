<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel18.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Magic Number [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the challenge Magic Number!
  </p>
</div>

## Challenge
To solve this level, you only need to provide the Ethernaut with a Solver, a contract that responds to whatIsTheMeaningOfLife() with the right number.

> Solution: 
  [Magic Number Contract](https://goerli.etherscan.io/address/0xd668b227BD7706c96f5Eb0bfe07120cdf2e610E3#internaltx) || [Hack Contract](https://goerli.etherscan.io/address/0xA2D25Ba6BE71808d7bB9856dCF50DCDb24aF809F#internaltx)
## Complementary information to solve the challenge
The solver's code needs to be really tiny. Really reaaaaaallly tiny. Like freakin' really really itty-bitty tiny: 10 opcodes at most.

Hint: Perhaps its time to leave the comfort of the Solidity compiler momentarily, and build this one by hand O_o. That's right: Raw EVM bytecode.


## Extra help
[evm](https://www.evm.codes/) for build the bytecode you can use the section playground.

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
git checkout 18-magic-number  
```

Then install dependencies

```
yarn
```
## Solution explained
Ok this challange is very different, so, we going step by step.
We split the explication in three  section: 

1. Runtime code: 
  For return always the magic number, we need use opcode return this 

  return(offset, size ) - end execution and return data from memory
  Stack input
  offset: byte offset in the memory in bytes, to copy what will be the return data of this context.
  size: byte size to copy (size of the return data).

  
  Goal: return 32 bytes from memory  == > Size = 32 bytes inside this memory we'll store 42

  * We need to store the inputs 
  PUSH1 0x20 // for size 32 bytes
  PUSH1 0 // for p 0 for number of stack
  RETURN

  PUSH1 = 	Place 1 byte item on stack

  * Make sure the number 42 is lower than memory 0 and has the size 32 bytes
  mstore(offset, value) - 
  Stack input
  offset: offset in the memory in bytes.
  value: 32-byte value to write in the memory.

  PUSH1 0x2a
  PUSH1 0
  MSTORE

  * runtime code (play ground) - Bytecode

  602a60005260206000f3

2. Creation code
Creation code is the code that will deploy the smart contract and the runtime code, when deploy we must return the runtime code

* Store the runtime code in memory 
runtime code:  602a60005260206000f3 //10 number divide by 2 is 10 bytes 
         
PUSH10 0x602a60005260206000f3 // Push 10 bytes to the stack 
PUSH1 0
MSTORE

What is the sentence doing? Is that storing the runtime code in memory 0

* Next,
return the runtime code 
We need figure out is the offset? which turns out to be 22
Return 10 bytes from memory starting at offset 22

PUSH1 0x0a  --> 10 bytes
PUSH1 0x16  --> 22 bytes offset
RETURN

* runtime code (play ground) - Bytecode
  69602a60005260206000f3600052600a6016f3

3. Deploy contract
create - This function will be deploy the smart contract and it's going to take in three inputs
, the first input is the amount , second the code that we're going to be deploying is located in memory skip the first 32bytes , the thirds is the size the 19bytes 
You can find the rest of solution in `Hack.sol`

### Run Solution [automated solution]
 - `yarn test:unit` for local testing 
 - `yarn deploy:goerli` remember change address in `helper-hardhat-config.ts`
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`


> You can see all code explain

<!-- ### Preventative Techniques -->
> 
## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com




[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
