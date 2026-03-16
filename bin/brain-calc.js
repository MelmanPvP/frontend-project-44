import Name from "../src/cli.js";
import readlineSync from "readline-sync";
const name = Name()
let answers = 0;
console.log('What is the result of the expression?')
  while (answers < 3) {
      let num1 = Math.floor(Math.random() * 100);
      let num2 = Math.floor(Math.random() * 100);
      let num3 = Math.floor(Math.random() * 3) + 1;
      let correctAnswer;
      let operator;
      switch (num3){
          case 1:
              operator = '+'
              correctAnswer = num1 + num2;
              break
          case 2:
              operator = '-'
              correctAnswer = num1 - num2;
              break
          case 3:
              operator = '*'
              correctAnswer = num1 * num2;
              break
      }
      console.log(`Question:${num1} ${operator} ${num2}`)

      const answer = Number(readlineSync.question('Your answer: '))
      if (answer === correctAnswer){
          console.log('Correct!')
          answers += 1
      }
      else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' `)
          console.log(`Let's try again, ${name}!`)
          break
      }
      if (answers === 3){
          console.log(`Congratulations, ${name}!`)
      }
  }



