const getRandomNumber = (min = 1, max = 101) => {
  const randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return randomNum;
};

const firstValOfArr = 0;

const getArrLength = (arr) => arr.length;

const getRandomIndex = (arr) => getRandomNumber(firstValOfArr, getArrLength(arr));

const makeFindNumGame = (checkingFunc) => {
  const randomNum = getRandomNumber();
  const question = `Question: ${randomNum}`;
  const correctAnswer = checkingFunc(randomNum);
  return { correctAnswer, question };
};

export { getRandomNumber, getRandomIndex, makeFindNumGame };
