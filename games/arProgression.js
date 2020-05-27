import showResult from '../src/index.js';
import {
  getUserAnswer,
  hideValueOfProg,
  isHideValueOfProg,
  getArProgression,
  countOfRounds,
  getUserName,
} from '../src/cli.js';

const buildАrProgression = () => {
  const rules = 'What number is missing in the progression?';
  const userName = getUserName(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
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

export default buildАrProgression;
