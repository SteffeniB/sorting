function split(wholeArray) {
  let splitIndex = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, splitIndex);
  let secondHalf = wholeArray.slice(splitIndex);
  //console.log(firstHalf, secondHalf);
  return [firstHalf, secondHalf];
}
split([1, 2, 3]);

function merge(arrLeft, arrRight) {
  let newArr = [];
  let total = arrLeft.length + arrRight.length;
  let indexLeft = 0;
  let indexRight = 0;
  while (newArr.length < total) {
    let left = arrLeft[indexLeft];
    let right = arrRight[indexRight];
    if (left < right || indexRight === arrRight.length) {
      newArr.push(left);
      indexLeft++;
    } else if (left > right || indexLeft === arrLeft.length) {
      newArr.push(right);
      indexRight++;
    }
  }
  return newArr;
}

function mergeSort(array) {
  //debugger;
  let merged;
  if (array.length <= 1) {
    return array;
  } else {
    let newArrays = split(array);
    let leftArray = mergeSort(newArrays[0]);
    let rightArray = mergeSort(newArrays[1]);
    merged = merge(leftArray, rightArray);
  }
  return merged;
}
console.log(mergeSort([2, 1, 3, 4]));
