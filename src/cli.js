import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomNumber = (min = 1, max = 201) => {
  const randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return randomNum;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};


const gameIsEven = () => {
  let iter = 0;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (iter < 3) {
    const randomNum = getRandomNumber();
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer();

    if (userAnswer === isNumberEven(randomNum)) {
      console.log('Correct!');
      iter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${isNumberEven(randomNum)}".`);
      console.log(`Let's try again, ${userName}!`);
      iter = 0;
    }
  }

  if (iter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { getUserName, gameIsEven };
