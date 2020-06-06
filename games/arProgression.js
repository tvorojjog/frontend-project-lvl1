import { getRandomNumber, getRandomIndex } from '../src/cli.js';

const rules = 'What number is missing in the progression?';

const getArProgression = () => {
  const progressionLength = 10;
  const steps = [2, 3, 4, 5];
  const startNum = getRandomNumber();
  const randomIndex = getRandomIndex(steps);
  const step = Number(steps[randomIndex]);
  const newProg = [startNum];

  for (let i = 1; i < progressionLength; i += 1) {
    if (startNum < 50) {
      newProg.push(newProg[newProg.length - 1] + step);
    } else {
      newProg.push(newProg[newProg.length - 1] - step);
    }
  }
  return newProg.join(' ');
};

const hideValueOfProg = (progression, countOfHideVal = 1) => {
  const result = progression.split(' ');

  for (let i = 0; i < countOfHideVal; i += 1) {
    const idexOfHideVal = getRandomIndex(result);
    if (result[idexOfHideVal] !== '..') {
      result[idexOfHideVal] = '..';
    }
  }
  return result.join(' ');
};

const showHideValue = (progression, progForUser) => {
  const checkProg = progForUser.split(' ');
  const correctValues = [];

  for (let i = 0; i <= checkProg.length; i += 1) {
    if (checkProg[i] === '..') {
      correctValues.push(progression.split(' ')[i]);
    }
  }
  return correctValues.join(' ');
};

const buildАrProgression = () => {
  const progression = getArProgression();
  const progForUser = hideValueOfProg(progression);
  const question = `${progForUser}`;
  const correctAnswer = showHideValue(progression, progForUser);
  return { correctAnswer, question };
};

export { buildАrProgression, rules };
