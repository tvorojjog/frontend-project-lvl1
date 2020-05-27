import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
  countOfRounds,
  getUserName,
} from '../src/cli.js';

const isEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const userName = getUserName(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isNumberEven(randomNum);

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default isEven;
