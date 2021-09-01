// Random fill array
// Recursion sum
// const array = new Array(10)
//   .fill(0)
//   .map(() => Math.floor(Math.random() * 10) + 1);

// Display random array
// console.log(array);

const array = [1, 2, 3, 4, 55, 6, 7, 8, 9, 10]; // 105

function sum(array) {
  if (!array.length) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}

console.log(sum(array));

function countList(array) {
  if (!array.length) {
    return 0;
  } else {
    return 1 + countList(array.slice(1));
  }
}

console.log(countList(array));

function findMaxNumber(array) {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  } else {
    const max = findMaxNumber(array.slice(1));
    return array[0] > max ? array[0] : max;
  }
}

console.log(findMaxNumber(array));

