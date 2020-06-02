import { getRandomNumber } from '../src/cli.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  let minNum = Math.min(firstNum, secondNum);
  let result = 0;
  const gcdMinNum = 0;

  while (minNum > gcdMinNum) {
    if (firstNum % minNum === 0 && secondNum % minNum === 0) {
      result = minNum;
      break;
    } else {
      minNum -= 1;
    }
  }
  return result;
};

const findGCD = (startOfInterval = 1, endOfInterval = 51) => {
  const firstRandomNum = getRandomNumber(startOfInterval, endOfInterval);
  const secondRandomNum = getRandomNumber(startOfInterval, endOfInterval);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = getGCD(firstRandomNum, secondRandomNum);
  return { correctAnswer, question, rules };
};

export default findGCD;
