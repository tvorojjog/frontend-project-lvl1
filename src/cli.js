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

const getResultOfCalc = (firstNum, secondNum, operation) => {
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

const getGCD = (firstNum, secondNum) => {
  let minNum = Math.min(firstNum, secondNum);
  let result = 0;

  while (minNum > 0) {
    if (firstNum % minNum === 0 && secondNum % minNum === 0) {
      result = minNum;
      break;
    } else {
      minNum -= 1;
    }
  }
  return result;
};

export {
  getUserName,
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
  getResultOfCalc,
  getGCD,
};
