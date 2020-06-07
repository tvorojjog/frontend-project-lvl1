import readlineSync from 'readline-sync';
import { getUserName } from './cli.js';

const countOfRounds = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const startGame = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const { correctAnswer, question } = game();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
