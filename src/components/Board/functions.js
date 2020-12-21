import { wordsJSON } from '../../words.json';

export function randomNumber(maxLength) {
  return Math.floor(Math.random() * maxLength, 10);
}
export function dontReapeatNumber(arrayLength, itemsLength) {
  const numbers = [];
  while (numbers.length < arrayLength) {
    const checkNumber = randomNumber(itemsLength);
    if (numbers.indexOf(checkNumber) === -1) numbers.push(checkNumber);
  }
  return numbers;
}
export default function RandomWordsBoard() {
  const wordsGame = dontReapeatNumber(25, wordsJSON.length);
  return wordsGame.map((a, b) => ({
    id: b,
    text: wordsJSON[a],
  }));
}
