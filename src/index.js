import readlineSync from 'readline-sync';
import { countOfRounds, getUserAnswer } from './cli.js';

const getUserName = (rules = ' ') => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (rules !== ' ') {
    console.log(rules);
  }
  return userName;
};

const showResult = (userName, userAnswer, correctAnswer, iter) => {
  let result = '';
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    if (iter === countOfRounds) {
      console.log(`Congratulations, ${userName}!`);
      result = true;
    }
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    result = true;
  }
  return result;
};

const startGame = (game, rules) => {
  const userName = getUserName(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const correctAnswer = game();
    const userAnswer = getUserAnswer();

    if (showResult(userName, userAnswer, correctAnswer, i) === true) {
      break;
    }
  }
};

export { startGame, getUserName };
