import readlineSync from 'readline-sync';
import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  getResultOfCalc,
} from '../src/cli.js';

const gameCalculator = () => {
  const operations = ['+', '-', '*'];
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstRandomNum = getRandomNumber(1, 11);
    const secondRandomNum = getRandomNumber(1, 11);
    const operation = operations[getRandomNumber(0, 3)];
    const correctAnswer = getResultOfCalc(firstRandomNum, secondRandomNum, operation);
    console.log(`Question: ${firstRandomNum} ${operation} ${secondRandomNum}`);
    const userAnswer = getUserAnswer();

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default gameCalculator;
