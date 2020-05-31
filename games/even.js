import { getRandomNumber } from '../src/cli.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumForEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const findEvenNumber = () => {
  const randomNum = getRandomNumber();
  const question = `Question: ${randomNum}`;
  const correctAnswer = checkNumForEven(randomNum);
  return { correctAnswer, question };
};

export { findEvenNumber, rules };
