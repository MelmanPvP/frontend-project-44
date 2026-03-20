#!/usr/bin/env node
import Name from "../src/cli.js";
import readlineSync, {question} from "readline-sync";
const name = Name()
console.log('What number is missing in the progression?')
let answers = 0;
function ProgGen () {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let Question = `${a}`;
    let rightAnswer;
    let secret = Math.floor(Math.random() * 10) + 1;
    for (let i = 1; i <= 10; i++) {
        if (i === secret) {
            Question += ` ..`
            rightAnswer = a + i * b
        }
        else {
            Question += ` ${a + i * b}`
        }

    }
  return {Question, rightAnswer};
}


while (answers < 3){
   let {Question,rightAnswer}= ProgGen()
    console.log(`Question: ${Question}`)
    const answer = Number(readlineSync.question('Your answer: '))
    if (answer === rightAnswer){
        console.log('Correct!')
        answers += 1
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    if (answers === 3){
        console.log(`Congratulations, ${name}!`)
    }
}
