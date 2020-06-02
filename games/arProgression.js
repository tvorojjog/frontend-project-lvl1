import { getRandomNumber, getRandomIndex } from '../src/cli.js';

const rules = 'What number is missing in the progression?';

const getArProgression = () => {
  const progressionLength = 10;
  const steps = [2, 3, 4, 5];
  const startNum = getRandomNumber();
  const randomIndex = getRandomIndex(steps);
  const step = Number(steps[randomIndex]);
  let addNum = startNum;
  let result = '';

  for (let i = 0; i < progressionLength; i += 1) {
    result += `${addNum} `;
    if (startNum < 50) {
      addNum += step;
    } else {
      addNum -= step;
    }
  }
  return result.trim();
};

const hideValueOfProg = (progression, countOfHideVal = 1) => {
  const result = progression.split(' ');
  let countOfHiddenVal = 0;

  for (let i = 0; i <= result.length; i += 1) {
    if (countOfHiddenVal === countOfHideVal) {
      break;
    }

    const idexOfHideVal = getRandomIndex(result);

    if (result[idexOfHideVal] !== '..') {
      result[idexOfHideVal] = '..';
      countOfHiddenVal += 1;
    }
  }
  return result.join(' ');
};

const showHideValue = (progression, progForUser) => {
  const checkProg = progForUser.split(' ');
  let correctValue = '';

  for (let i = 0; i <= checkProg.length; i += 1) {
    if (checkProg[i] === '..') {
      correctValue += `${progression.split(' ')[i]} `;
    }
  }
  return correctValue.trim();
};

const buildАrProgression = () => {
  const progression = getArProgression();
  const progForUser = hideValueOfProg(progression);
  const question = `${progForUser}`;
  const correctAnswer = showHideValue(progression, progForUser);
  return { correctAnswer, question, rules };
};

export default buildАrProgression;
