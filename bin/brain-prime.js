#!/usr/bin/env node
import Name from "../src/cli.js";
import readlineSync from "readline-sync";
const name = Name()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
let answers = 0;
while (answers < 3){
   let num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ')
    let correctAnswer;
    let result;
    if (num < 2){
        result = 'no'
    }
    for (let i = 2;i < num; i += 1){
        if (num % i === 0){
            result = 'no'
            break
        }
        else {
            result = 'yes'
        }
    }
    if (answer === result){
        console.log('Correct!')
        answers += 1
    }
    else if (answer !== result){
        correctAnswer = result
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    if (answers === 3){
        console.log(`Congratulations, ${name}!`)
    }
}
