const mergeSort = (arr) => {
  sortedArray = [];
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      mergedArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray
    .concat(sortedLeft.slice(leftIndex))
    .concat(sortedRight.slice(rightIndex));
};

console.log(mergeSort([10, 20, 15, 12, 8]));

const fibs = (n, arr = [0, 1]) => {
  if (n <= 2) return arr;
  else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibs(n - 1, arr);
  }
};

console.log(fibs(5));
