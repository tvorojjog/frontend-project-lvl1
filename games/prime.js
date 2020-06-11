import { generateRandomNumber } from '../src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const raundPrime = () => {
  const randomNum = generateRandomNumber();
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export { raundPrime, rules };
