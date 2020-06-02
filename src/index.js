import readlineSync from 'readline-sync';
import { getRandomNumber } from './cli.js';

const countOfRounds = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const makeFindNumGame = (checkingFunc, rules) => {
  const randomNum = getRandomNumber();
  const question = `${randomNum}`;
  const correctAnswer = checkingFunc(randomNum);
  return { correctAnswer, question, rules };
};

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (rules !== 'no rules') {
    console.log(rules);
  }
  return userName;
};

const startGame = (game) => {
  const userName = greeting(game().rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const { correctAnswer, question } = game();
    console.log(`Question: ${question}`);
    const answer = correctAnswer;
    const userAnswer = getUserAnswer();

    if (i === countOfRounds && userAnswer === String(answer)) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}!`);
      break;
    } else if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export { startGame, greeting, makeFindNumGame };
