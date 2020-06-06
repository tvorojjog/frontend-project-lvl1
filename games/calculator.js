import { getRandomNumber, getRandomIndex } from '../src/cli.js';

const rules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getResultOfCalc = (firstNum, secondNum, operation) => {
  const result = [];

  if (operation === '+') {
    result.push(firstNum + secondNum);
  } else if (operation === '-') {
    result.push(firstNum - secondNum);
  } else {
    result.push(firstNum * secondNum);
  }
  return result.join('');
};

const calculate = (startOfInt = 1, endOfInt = 11) => {
  const randomIndex = getRandomIndex(operations);
  const firstNum = getRandomNumber(startOfInt, endOfInt);
  const secondNum = getRandomNumber(startOfInt, endOfInt);
  const operation = operations[randomIndex];
  const question = `${firstNum} ${operation} ${secondNum}`;
  const correctAnswer = getResultOfCalc(firstNum, secondNum, operation);
  return { correctAnswer, question };
};

export { calculate, rules };
