import { getRandomNumber } from '../src/cli.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  const gcdMinNum = 1;
  const result = [];

  for (let i = Math.min(firstNum, secondNum); i >= gcdMinNum; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      result.push(i);
      i = gcdMinNum;
    }
  }
  return result.join('');
};

const findGCD = (startOfInterval = 1, endOfInterval = 51) => {
  const firstRandomNum = getRandomNumber(startOfInterval, endOfInterval);
  const secondRandomNum = getRandomNumber(startOfInterval, endOfInterval);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = getGCD(firstRandomNum, secondRandomNum);
  return { correctAnswer, question };
};

export { findGCD, rules };
