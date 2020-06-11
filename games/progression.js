import { generateRandomNumber } from '../src/utils.js';

const rules = 'What number is missing in the progression?';

const getQuestion = (startNum, step, indexOfHideVal) => {
  const progressionLength = 10;
  const prog = [startNum];

  for (let i = 1; i < progressionLength; i += 1) {
    if (startNum < 50) {
      prog.push(prog[prog.length - 1] + step);
    } else {
      prog.push(prog[prog.length - 1] - step);
    }
  }

  prog[indexOfHideVal] = '..';
  return prog.join(' ');
};

const raundProgression = (startOfInt = 2, endOfInt = 6) => {
  const [firstIndexInt, lastIndexInt] = [0, 11];
  const startNum = generateRandomNumber();
  const step = generateRandomNumber(startOfInt, endOfInt);
  const hideIndex = generateRandomNumber(firstIndexInt, lastIndexInt);
  const question = `${getQuestion(startNum, step, hideIndex)}`;
  const correctAnswer = startNum < 50 ? startNum + hideIndex * step : startNum - hideIndex * step;
  return { correctAnswer, question };
};

export { raundProgression, rules };
