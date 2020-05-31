import readlineSync from 'readline-sync';

const countOfRounds = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const greeting = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (rules !== 'no rules') {
    console.log(rules);
  }
  return userName;
};

const startGame = (game, rules) => {
  const userName = greeting(rules);

  for (let i = 1; i <= countOfRounds; i += 1) {
    const { correctAnswer, question } = game();
    console.log(question);
    const answer = correctAnswer;
    const userAnswer = getUserAnswer();

    if (userAnswer === String(answer)) {
      console.log('Correct!');
      if (i === countOfRounds) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export { startGame, greeting };
