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

const getArProgression = () => {
  const startNum = getRandomNumber(1, 101);
  const step = getRandomNumber(2, 6);
  let addNum = startNum;
  let result = '';

  for (let i = 0; i < 10; i += 1) {
    result += `${addNum} `;
    if (startNum < 50) {
      addNum += step;
    } else {
      addNum -= step;
    }
  }
  return result.trim();
};

const hideValueOfProg = (progression) => {
  const result = progression.split(' ');
  const idexOfHideVal = getRandomNumber(0, 10);
  result[idexOfHideVal] = '..';
  return result.join(' ');
};

const isHideValueOfProg = (progression, progForUser, value) => {
  const checkProg = progForUser.split(' ');
  let result = 0;
  let correctValue = 0;

  for (let i = 0; i <= checkProg.length; i += 1) {
    if (checkProg[i] === '..') {
      checkProg[i] = value;
      correctValue = progression.split(' ')[i];
      break;
    }
  }
  if (checkProg.join(' ') === progression) {
    result = value;
  } else {
    result = correctValue;
  }
  return result;
};

const isPrimeNumber = (number) => {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
  ];

  for (let i = 0; i < primeNumbers.length; i += 1) {
    if (number === primeNumbers[i]) {
      return 'yes';
    }
  }
  return 'no';
};

export {
  getUserName,
  getRandomNumber,
  getUserAnswer,
  isNumberEven,
  getResultOfCalc,
  getGCD,
  getArProgression,
  hideValueOfProg,
  isHideValueOfProg,
  isPrimeNumber,
};
