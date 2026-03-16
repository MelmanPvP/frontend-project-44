import Name from "../src/cli.js";
import readlineSync from "readline-sync";
const name = Name()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
for (  let answers = 0; answers <= 4;) {
    let num1 = Math.floor(Math.random() * 100);
    console.log(`Question: ${num1}`)
    let answer = readlineSync.question('Your answer: ')
    if (answer === 'yes' && num1 % 2 === 0 || answer === 'no' && num1 % 2 === 1) {
        console.log('Correct!')
        answers += 1
    }
    else if (answer === 'yes') {
        let wrong = answer
        answer = 'no'
        console.log(`\'${wrong}\' is wrong answer ;(. Correct answer was \'${answer}\'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    else if (answer === 'no') {
        let wrong = answer
        answer = 'yes'
        console.log(`\'${wrong}\' is wrong answer ;(. Correct answer was \'${answer}\'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
    if (answers === 3){
        console.log(`Congratulations, ${name}!`)
        break
    }
}
