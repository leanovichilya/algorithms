const array = [5, 3, 8, 15, 6, 98, 5, 3, 12, 35, 68, 48, 78, 85, 25, 12, 20, 10, 11];

function findMin(arr){
  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if(arr[i] <= min){
      min = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
}

function selectionSort(arr){
  let array = [];
  const length = arr.length;

  for (let i = 0; i < length; i += 1) {
    const min = findMin(arr);
    const element = arr.splice(min, 1);
    array = [...array, ...element];
  }

  return array;
}

console.log(selectionSort(array).length);
