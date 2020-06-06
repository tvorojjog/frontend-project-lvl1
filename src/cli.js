import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 101) => {
  const randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return randomNum;
};

const firstValOfArr = 0;

const getArrLength = (arr) => arr.length;

const getRandomIndex = (arr) => getRandomNumber(firstValOfArr, getArrLength(arr));

const makeGameForFindNum = (checkingFunc) => {
  const randomNum = getRandomNumber();
  const question = `${randomNum}`;
  const correctAnswer = checkingFunc(randomNum);
  return { correctAnswer, question };
};

const getUserName = (rules) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (rules !== 'no rules') {
    console.log(rules);
  }
  return userName;
};

export {
  getRandomNumber,
  getRandomIndex,
  getUserName,
  makeGameForFindNum,
};
