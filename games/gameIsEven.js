import readlineSync from 'readline-sync';
import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
} from '../src/cli.js';

const gameIsEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNumber();
    const correctAnswer = isNumberEven(randomNum);
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer();

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default gameIsEven;
