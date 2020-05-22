import readlineSync from 'readline-sync';
import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
  getResultOfCalc,
  getGCD,
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
    const userAnswer = Number(getUserAnswer());

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

const gameGCD = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstRandomNum = getRandomNumber(1, 51);
    const secondRandomNum = getRandomNumber(1, 51);
    const correctAnswer = getGCD(firstRandomNum, secondRandomNum);
    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    const userAnswer = Number(getUserAnswer());

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export { gameIsEven, gameCalculator, gameGCD };
