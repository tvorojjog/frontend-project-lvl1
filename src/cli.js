import readlineSync from 'readline-sync';

const getUserName = (rules) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (rules !== 'no rules') {
    console.log(rules);
  }
  return userName;
};

export default getUserName;
