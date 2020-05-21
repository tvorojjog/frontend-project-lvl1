import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
  correctResultOfCalc,
} from '../src/cli.js';

const gameIsEven = () => {
  let iter = 0;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (iter < 3) {
    const randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer();

    if (userAnswer === isNumberEven(randomNum)) {
      console.log('Correct!');
      iter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isNumberEven(randomNum)}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (iter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const gameCalculator = () => {
  let iter = 0;
  const operations = ['+', '-', '*'];
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  while (iter < 3) {
    const firstRandomNum = getRandomNumber(1, 11);
    const secondRandomNum = getRandomNumber(1, 11);
    const operation = operations[getRandomNumber(0, 3)];
    const correctAnswer = correctResultOfCalc(firstRandomNum, secondRandomNum, operation);
    console.log(`Question: ${firstRandomNum} ${operation} ${secondRandomNum}`);
    const userAnswer = getUserAnswer();

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      iter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (iter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { gameIsEven, gameCalculator };
