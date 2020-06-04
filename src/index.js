import readlineSync from 'readline-sync';
import { getUserName } from './cli.js';

const countOfRounds = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const startGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const { rules } = game();
  const userName = getUserName(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const { correctAnswer, question } = game();
    console.log(`Question: ${question}`);
    const answer = correctAnswer;
    const userAnswer = getUserAnswer();

    if (i === countOfRounds && userAnswer === String(answer)) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
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

export default startGame;
