const generateRandomNumber = (min = 1, max = 101) => {
  const randomNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  return randomNum;
};

const firstValOfArr = 0;

const getRandomIndex = (arr) => generateRandomNumber(firstValOfArr, arr.length);

export { generateRandomNumber, getRandomIndex };
