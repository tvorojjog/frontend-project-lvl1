const showResult = (userName, userAnswer, correctAnswer, iter) => {
  let result = '';
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (iter === 2) {
      console.log(`Congratulations, ${userName}!`);
      result = true;
    }
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    result = true;
  }
  return result;
};

export default showResult;
