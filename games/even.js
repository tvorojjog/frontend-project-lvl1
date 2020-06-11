import { generateRandomNumber } from '../src/utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const raundEven = () => {
  const randomNum = generateRandomNumber();
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export { raundEven, rules };
