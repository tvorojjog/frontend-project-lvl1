import { getRandomNumber } from '../src/cli.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkNumForPrime = (number) => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
  ];

  for (let i = 0; i < primeNumbers.length; i += 1) {
    if (number === primeNumbers[i]) {
      return 'yes';
    }
  }
  return 'no';
};

const findPrimeNum = () => {
  const randomNum = getRandomNumber();
  console.log(`Question: ${randomNum}`);
  const correctAnswer = checkNumForPrime(randomNum);
  return correctAnswer;
};

export { findPrimeNum, rules };
