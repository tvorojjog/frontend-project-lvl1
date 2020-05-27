import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  isPrimeNumber,
  countOfRounds,
  getUserName,
} from '../src/cli.js';

const isPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const userName = getUserName(rules);
  const startOfInt = 1;
  const endOfInt = 102;

  for (let i = 1; i <= countOfRounds; i += 1) {
    const randomNum = getRandomNumber(startOfInt, endOfInt);
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isPrimeNumber(randomNum);

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default isPrime;
