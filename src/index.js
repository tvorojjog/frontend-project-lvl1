import { countOfRounds } from './cli.js';

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

export default showResult;
