import readlineSync from 'readline-sync';
import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  isPrimeNumber,
} from '../src/cli.js';

const gameIsPrimeNumber = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNumber(1, 102);
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isPrimeNumber(randomNum);

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default gameIsPrimeNumber;
