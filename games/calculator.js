import { getRandomNumber, getRandomIndex } from '../src/cli.js';

const rules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getResultOfCalc = (firstNum, secondNum, operation) => {
  let result = 0;

  if (operation === '+') {
    result = firstNum + secondNum;
  } else if (operation === '-') {
    result = firstNum - secondNum;
  } else {
    result = firstNum * secondNum;
  }
  return result;
};

const calculate = (startOfInt = 1, endOfInt = 11) => {
  const randomIndex = getRandomIndex(operations);
  const firstNum = getRandomNumber(startOfInt, endOfInt);
  const secondNum = getRandomNumber(startOfInt, endOfInt);
  const operation = operations[randomIndex];
  const question = `Question: ${firstNum} ${operation} ${secondNum}`;
  const correctAnswer = getResultOfCalc(firstNum, secondNum, operation);
  return { correctAnswer, question };
};

export { calculate, rules };
