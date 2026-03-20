#!/usr/bin/env node
import Name from "../src/cli.js";
import readlineSync from "readline-sync";
const name = Name()
console.log('Find the greatest common divisor of given numbers.')
let answers = 0;
while (answers < 3){
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let correctAnswer;
    console.log(`Question: ${num1} ${num2}`)
    const answer = Number(readlineSync.question('Your answer: '))
    let a = num1;
    let b = num2;
     while (b !== 0) {
     let c = a % b;
     a = b;
     b = c;
     }
     correctAnswer = a;
    if (answer === correctAnswer){
        console.log('Correct!')
        answers += 1
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    if (answers === 3){
        console.log(`Congratulations, ${name}!`)
    }
}
