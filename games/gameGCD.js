import readlineSync from 'readline-sync';
import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  getGCD,
} from '../src/cli.js';

const gameGCD = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstRandomNum = getRandomNumber(1, 51);
    const secondRandomNum = getRandomNumber(1, 51);
    const correctAnswer = getGCD(firstRandomNum, secondRandomNum);
    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    const userAnswer = getUserAnswer();

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default gameGCD;
