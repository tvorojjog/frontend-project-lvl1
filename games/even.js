import { makeGameForFindNum } from '../src/cli.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumForEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const findEvenNumber = () => makeGameForFindNum(checkNumForEven);

export { findEvenNumber, rules };
