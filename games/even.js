import { makeFindNumGame } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumForEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const findEvenNumber = () => makeFindNumGame(checkNumForEven, rules);

export default findEvenNumber;
