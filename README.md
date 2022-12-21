
<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://ethernaut.openzeppelin.com/">
    <img src="https://ethernaut.openzeppelin.com/imgs/BigLevel0.svg" alt="" width="800" height="485">
  </a>

  <h1 align="center">Hello Ethernaut [SOLUTION]</h3>

  <p align="center">
    Hi🍍  here you can found one of the solution for the first challenge Hello Ethernaut!
  </p>
</div>

## About the challenge
This level walks you through the very basics of how to play the game. 


## Challenge
Interact with the contract to complete the level. Starting by `await contract.info()`


## Complementary information to solve the challenge
When opening the console we have several functionalities that are brought to us by default, these will be useful to have for the following challenges, for now the important thing is to know that you have them and that you can use them.

If you use the command `help()` they will show you all these functions that you can always count on.

The `contract` keywork that you will use a lot to interact with the contract itself, because just placing `contract` in the console displays all the information that is in it, and in the first section we see the ABI that means Application Binary Interface, and what does this mean? It is an interface that will allow us to interact with the smart contract, it contains all the functionalities that the contract has, that is, when displaying that box, it will show us all the functionalities it has. This ABI is thrown to us by the EVM compiler, each time you compile a contract it will return an ABI.

And when do we start playing?

In the console, the challenge begins when you have instantiated your contract, this is a button that is located at the bottom called **new instance**, which means that a contract is created just for you and that you can interact with your .

Then you can insert in console

**`await contract.info ()`** and the challenge has started, to win, follow the instructions that the console gives you, good luck, I know you can.

When you think that you have already achieved it, you have to **check instance** and there they verify if you have successfully complied.

[Get faucet token](https://faucets.chain.link/)



## Extra help
You got lost in some of the instructions, you don't know if you've got it right or what's next, well, calm down.

> Remember this Tip: don't forget that you can always look in the contract's ABI!

You can see the ABI with the `await contract.abi`  and see what was the last function you did, you can call it again, you can see what other functions the contract has and what you may have to look for, in short, the logic of the contract. contract, you can read it, remember that in the ethereum blockchain contracts are public, so take a look, see if you missed something and try again.

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
git checkout 00-hello-ethernaut
```

Then install dependencies

```
yarn
```
## Solution explained
###

1. We start as the section tells us `await contract.info()`

    R: `'You will find what you need in info1().'`

2. `await contract.info1()`

   R: `'Try info2(), but with "hello" as a parameter.'`

3. Here is slightly different, you have to send "hello" as a parameter, if we see in the ABI, it is a function that expects a string type data.

    `await contract.info2("hello")`
    R: `“The property infoNum holds the number of the next info method to call.'`

4. We already know this `await contract.infoNum()`

      R: This gives us a `uint8` has a capacity of 8 bits of positive numbers, to store only the number `42` is perfect for the correct use of memory, this is associated with the public variable `infoNum`.

5. We use that number to apply the new method `await contract.info42()`

    R: `theMethodName is the name of the next method.'`

6. `await contract.theMethodName()`

    `'The method name is method7123949.'`

7. Ok, it gets a little weird but we keep going, we're on the right track. `await contract.method7123949()`

    R:`'If you know the password, submit it to authenticate().'`

8. Here comes the difficult part, password? what password are you talking about? Could it be… `7123949` or the word `password`?

For this reason, in the statement they emphasize that we will always have the ABI available, which tells you that all the functions appeared, there we could realize that the `password()` function exists, in addition to the fact that it is public, anyone can access it, So it's not so safe to save your password in this smart contract? … No, but let's not deviate.
  `await contract.password()`
    R: `ethernaut0`
    Yes we have the key, comes the final step.

9. As the previous answer said, we send the key using the `authenticate()` function `await contract.authenticate("ethernaut0")`

Here we have to sign to process the information and why? If all the others did not do it, in this case we are making a change of state in the variable **`cleared`** later you will see the contract and you will understand what I am talking about, when making this change you must pay a fee so that your contract is updated and thus, when checking your instance, it will show that you have had a successful challenge.

> Try this solution  `node ./scripts/complete-solutions.js`

**Other solution**

  ****The contract is shown to us when you have successfully completed the challenge, so here we can appreciate the entire flow, if you noticed, we were jumping from function to function to authenticate ourselves, but was it necessary to go through each one of them? the steps? Do the 9 steps? Follow me on the next line.

  If we see that the password value is not explicitly visible but we can access it, since it is a `public` variable that was assigned in the constructor and what this means is that, when creating the contract, the constructor executes one and only once, when doing the deploy, the `_password` parameter was sent and the **`password`** variable was reassigned to that value, and having the `public` keyword this brings us by default a `getter()` function for this variable, this allows us to see the value it contains, so we can access it via **`contract.password()`** as if it were a function.

But why do we need the password? It is to authenticate us, with the password value obtained in a single step, we can immediately go to the `authenticate()` function and see that it expects a string as a parameter, when we send it the password it must be in quotes so that our contract knows which is a string.

What happens in the authenticate function after receiving the password? In solidity you can't directly compare two strings like in other languages, so a hash function is applied to it, and if they have the same content, it should be the same, right? That's exactly what this conditional does. validating that it is correct reassigns the `cleared` variable to `true.`

When we click on our button to check instance and verify that our challenge has been completed successfully, what our ethernaut contract validates is if the cleared variable is true since the only way for it to be true is to have validated the authentication, since initially declared `false`

> Try this solution  `node ./scripts/simple-solutions.js`

## License

Distributed under the WTFPL License. See `LICENSE.txt` for more information.



## Contact

Piña - [@pinalikefruit](https://twitter.com/pinalikefruit) - josepina@pinalikefruit.com

Github profile: [https://github.com/pinalikefruit](https://github.com/pinalikefruit)





[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pinalikefruit
