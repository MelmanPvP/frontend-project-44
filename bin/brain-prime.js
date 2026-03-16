import Name from "../src/cli.js";
import readlineSync, {question} from "readline-sync";
const name = Name()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
let answers = 0;
while (answers < 3){
   let num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ')
    let correctAnswer;
    if (answer === 'yes' && num !== 0){
        console.log('Correct!')
        answers += 1
    }
    else if (answer === 'no' && num === 0){
        console.log('Correct!')
        answers += 1
    }
    else if (answer === 'no' && num !== 0){
        correctAnswer = 'yes'
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    else if (answer === 'yes' && num === 0){
        correctAnswer = 'no'
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    else {
        if (num === 0){
            correctAnswer = 'no'
        }
        else if (num !== 0){
            correctAnswer = 'yes'
        }
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    if (answers === 3){
        console.log(`Congratulations, ${name}!`)
    }
}
