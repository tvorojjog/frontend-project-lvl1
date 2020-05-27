import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  getGCD,
  countOfRounds,
  getUserName,
} from '../src/cli.js';

const findGCD = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const userName = getUserName(rules);
  const startOfInterval = 1;
  const endOfInterval = 51;

  for (let i = 1; i <= countOfRounds; i += 1) {
    const firstRandomNum = getRandomNumber(startOfInterval, endOfInterval);
    const secondRandomNum = getRandomNumber(startOfInterval, endOfInterval);
    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = getGCD(firstRandomNum, secondRandomNum);

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default findGCD;
