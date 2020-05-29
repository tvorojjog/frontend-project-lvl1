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
  const firstRandomNum = getRandomNumber(startOfInt, endOfInt);
  const secondRandomNum = getRandomNumber(startOfInt, endOfInt);
  const randomIndex = getRandomIndex(operations);
  const operation = operations[randomIndex];
  console.log(`Question: ${firstRandomNum} ${operation} ${secondRandomNum}`);
  const correctAnswer = getResultOfCalc(firstRandomNum, secondRandomNum, operation);
  return correctAnswer;
};

export { calculate, rules };
