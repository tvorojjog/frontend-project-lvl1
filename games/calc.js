import { generateRandomNumber, getRandomIndex } from '../src/utils.js';

const rules = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum * secondNum;
  }
};

const raundCalc = (startOfInt = 1, endOfInt = 11) => {
  const operations = ['+', '-', '*'];
  const firstNum = generateRandomNumber(startOfInt, endOfInt);
  const secondNum = generateRandomNumber(startOfInt, endOfInt);
  const operation = operations[getRandomIndex(operations)];
  const question = `${firstNum} ${operation} ${secondNum}`;
  const correctAnswer = String(calculate(firstNum, secondNum, operation));
  return { correctAnswer, question };
};

export { raundCalc, rules };
