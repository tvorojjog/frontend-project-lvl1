import readlineSync from 'readline-sync';
import { userName } from '../bin/brain-games.js'

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomNumber = (min = 1, max = 201) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const isNumberEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    };
};

const isCorrectAnswer = () => {
    let iter = 0;

    while (iter < 3) {
        const randomNumber = getRandomNumber();
        console.log(`Question: ${randomNumber}`);
        const userAnswer = getUserAnswer();

        if (userAnswer === isNumberEven(randomNumber)) {
            console.log('Correct!');
            iter +=1;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(randomNumber)}.`);
            console.log(`Let's try again, ${userName}!`)
        };
    };
    const userName = getUserName();
    if (iter === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};

export { getUserName, isCorrectAnswer };
