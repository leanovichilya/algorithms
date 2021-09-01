// const array = new Array(20).fill(0).map(() => Math.floor(Math.random() * 10) + 1);
//
// console.log(array);

const array = [2, 5, 3, 7, 1, 10, 14, 21, 21, 5, 8, 6, 6];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const middle = Math.floor(arr.length / 2);
    const pivot = arr[middle];
    const less = [];
    const greater = [];

    arr.forEach((item, index) => {
      if (index !== middle) {
        item <= pivot ? less.push(item) : greater.push(item);
      }
    });

    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

console.log(quickSort(array));
