import showResult from '../src/index.js';
import {
  getRandomNumber,
  getUserAnswer,
  getResultOfCalc,
  countOfRounds,
  getUserName,
  operations,
  getrandomIndex,
} from '../src/cli.js';

const calculate = () => {
  const rules = 'What is the result of the expression?';
  const userName = getUserName(rules);
  const startOfInt = 1;
  const endOfInt = 11;

  for (let i = 1; i <= countOfRounds; i += 1) {
    const firstRandomNum = getRandomNumber(startOfInt, endOfInt);
    const secondRandomNum = getRandomNumber(startOfInt, endOfInt);
    const randomIndex = getrandomIndex(operations);
    const operation = operations[randomIndex];
    const correctAnswer = getResultOfCalc(firstRandomNum, secondRandomNum, operation);
    console.log(`Question: ${firstRandomNum} ${operation} ${secondRandomNum}`);
    const userAnswer = getUserAnswer();

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default calculate;
