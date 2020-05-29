import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 101) => {
  const randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return randomNum;
};

const countOfRounds = 3;

const firsValOfArr = 0;

const getArrLength = (arr) => arr.length;

const getRandomIndex = (arr) => getRandomNumber(firsValOfArr, getArrLength(arr));

const getUserAnswer = () => readlineSync.question('Your answer: ');

export {
  getRandomNumber,
  getUserAnswer,
  getRandomIndex,
  countOfRounds,
};
