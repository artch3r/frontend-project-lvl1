import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const runPrime = () => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  const isPrime = (num) => {
    if (num === 1) {
      return 'no';
    }
    const numberHalf = num / 2;
    for (let divider = 2; divider <= numberHalf; divider += 1) {
      if (num % divider === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(10);
    const answer = isPrime(question);
    questionsAndAnswers[i][0] = question;
    questionsAndAnswers[i][1] = answer;
  }

  runGameEngine(questionText, questionsAndAnswers);
};

export default runPrime;