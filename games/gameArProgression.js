import readlineSync from 'readline-sync';
import showResult from '../src/index.js';
import {
  getUserAnswer,
  hideValueOfProg,
  isHideValueOfProg,
  getArProgression,
} from '../src/cli.js';

const gameArProgression = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const progression = getArProgression();
    const progForUser = hideValueOfProg(progression);
    console.log(`Question: ${progForUser}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isHideValueOfProg(progression, progForUser, userAnswer);

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export default gameArProgression;
