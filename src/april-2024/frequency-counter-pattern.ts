// Task: Write a function that takes two arrays of numbers as inputs and checks if each number in
// the first array has a corresponding squared equivalent in the second array. Postition doesn't matter.
// The function should return true if there the criteria is met, and false if there isn't.

// Solution:
const checkMatch = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const counter1: Record<string, number> = {};
  const counter2: Record<string, number> = {};

  arr1.forEach((itemInArray1) => {
    const itemInArray1Squared = (itemInArray1 * itemInArray1).toString();
    counter1[itemInArray1Squared] = (counter1[itemInArray1Squared] || 0) + 1;
  });

  arr2.forEach((itemInArray2) => {
    if (!counter1[itemInArray2] === undefined) return false;

    counter2[itemInArray2] = (counter2[itemInArray2] || 0) + 1;
  });

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
};

// Testing
const arr1 = [1, 2, 3, 4, 2];
const arr2 = [4, 16, 4, 1, 9];

const result = checkMatch(arr1, arr2);
console.log({ result });
