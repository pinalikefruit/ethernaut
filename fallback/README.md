<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel1.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Fallback [SOLUTION]</h3>

  <p align="center">
    🍍Hi  here you can found one of the solution for the first challenge Fallback!
  </p>
</div>

## Challenge
You will beat this level if

* You claim ownership of the contract
* You reduce its balance to 0

> Solution: [tx](https://goerli.etherscan.io/address/0x2672521E93f500F83c60d69bFA03EB1638d73333)

## Complementary information to solve the challenge

- How to send ether interacting with the ABI of a contract
    
    We know this from the previous challenge, and we commented that in the ABI we can see each of the functions, but the function is missing a modifier called `payable` so that it can receive ether from the function.
    
    We can now recognize which function we can use to send ether.
    
    _Sending a non-zero amount of ether to a non-payable function will throw an exception. Do not do it._

- How to send ether without using the ABI
    
     If a contract does not have the `payable` keyword in any function, it will not be able to receive ether.
    
     That's what the function is for.
    
     ```solidity
     receive() external payable {}
     ```
    
     It means that without using the payable function, we can also directly send ether to the contract and receive it.

- How to convert between wei/ether
    
     You already know this from the previous section, we saw that displaying the help() command in the console we see the table.
    
     At the end we have `fromWei(wei)` and `toWei(ether)` , and how does this help us?
    
     In solidity we cannot handle decimals, so we handle decimals in integers and that is why we do the conversion, 1 ether is equivalent to 100000000000000000000 wei, so, to keep things simple, we have these two native functions to work with amounts.
    
- Fallback methods
    
     Fallback is a function that takes no arguments and returns nothing.
    
     It is executed when a non-existent function is called or Ether is sent directly to a contract, sounds familiar?
    
     Yes, this is what we already saw
    
     ```solidity
     receive() external payable {}
     ```
    and 
    ```solidity
    fallback() external payable {}
    ```
     It does not receive anything and does not return anything, but it is executed when we send ether to the contract.
    
     With this it seems to me dear friend that you are ready to start the challenge!
    
     I trust you, you can do it!

## Extra help
We learned how to send in a function with its argument, but how do you send money to a payable function like `contribute()` if it has no parameters?

How do I use the `receive()` function to send ether? `await contract.receive(##)` ?

I leave these doubts for you to think and investigate, and tell me what you find.

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
git checkout fallback
```

Then install dependencies

```
yarn
```
## Solution explained


### Run test 
 - `yarn test` for local testing 
 - `yarn test:staging` for goerli network, just change the contract address in `helper-hardhat-config.ts`

 

> You can see all code explain

### Solution interacting with the console


Then, queries that you have the owner to then make the withdrawal with `withdraw()`

The code would be the following:

1. :`await contract.contribute({value: 1})`

Here we send an amount less than 1 wei, and so we go to the list of contributors ooohhh yay.

2. : `await sendTransaction({from: "YOUR_PUBLIC_KEY", to: "CONTRACT_ADDRESS", value: 1})`

We send any amount greater than 0, and as in the previous transaction we are already part of the `contributions` list, we approve this conditional. And the next statement is that we are now the `owner`

3. `await contract.owner()`

We check that the address it returns is ours.

4. `await contract.withdraw()`

And come on, we reduce the account to 0, approving the second point.

If you want to check all these movements you can use

[goerli etherscan](https://goerli.etherscan.io/) and enter the address of the contract, you will see the creation transactions, the sending of ether that you have made and how you have emptied it.

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com

Github profile: [https://github.com/pinalikefruit](https://github.com/pinalikefruit)





[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
