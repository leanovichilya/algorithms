const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length - 1;

  while(start <= end){
    const mid = Math.floor((start + end) / 2);
    const guess = array[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      end = mid - 2;
    } else {
      start = mid + 1;
    }
  }

  return 'Значение не существует';
};
