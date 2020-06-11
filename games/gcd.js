import { generateRandomNumber } from '../src/utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateGCD = (num1, num2) => {
  if (num1 % num2 !== 0) {
    return generateGCD(num2 % num1, num1);
  }
  return num2;
};

const raundGCD = (startOfInterval = 1, endOfInterval = 51) => {
  const firstRandomNum = generateRandomNumber(startOfInterval, endOfInterval);
  const secondRandomNum = generateRandomNumber(startOfInterval, endOfInterval);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const correctAnswer = String(generateGCD(firstRandomNum, secondRandomNum));
  return { correctAnswer, question };
};

export { raundGCD, rules };
