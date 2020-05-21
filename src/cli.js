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

const correctResultOfCalc = (firstNum, secondNum, operation) => {
  let result = 0;

  if (operation === '+') {
    result = firstNum + secondNum;
  } else if (operation === '-') {
    result = firstNum - secondNum;
  } else {
    result = firstNum * secondNum;
  }
  return result;
};

export {
  getUserName,
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
  correctResultOfCalc,
};
