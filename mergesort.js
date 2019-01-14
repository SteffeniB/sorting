function split(wholeArray) {
  let splitIndex = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, splitIndex);
  let secondHalf = wholeArray.slice(splitIndex);
  //console.log(firstHalf, secondHalf);
  return [firstHalf, secondHalf];
}
split([1, 2, 3]);

function merge(arrOne, arrTwo) {
  let newArr = [];
  // let mergedArr = arrOne.concat(arrTwo);
  // for (let i = 0; i < mergedArr.length; i++) {
  //   for (let j = 0; j < mergedArr.length; j++) {
  //     let one = mergedArr[j];
  //     let two = mergedArr[j - 1];
  //     if (two < one) {
  //       let temp = one;
  //       one = two;
  //       two = temp;
  //       //arrOne = arrOne.slice(1);
  //       newArr.push(two);
  //     } else {
  //       newArr.push(one);
  //       //arrTwo = arrTwo.slice(1);
  //     }
  //   }
  debugger;
  let total = arrOne.length + arrTwo.length;
  let indexLeft = 0;
  let indexRight = 0;
  while (newArr.length < total) {
    let left = arrOne[indexLeft];
    let right = arrTwo[indexRight];
    if (left < right) {
      newArr.push(left);
      indexLeft++;
    } else {
      newArr.push(right);
      indexRight++;
    }
    if (indexLeft === arrOne.length) {
      for (let i = indexRight; i < arrTwo.length; i++) {
        newArr.push(arrTwo[i]);
      }
    }
    if (indexRight === arrTwo.length) {
      for (let i = indexLeft; i < arrOne.length; i++) {
        newArr.push(arrOne[i]);
      }
    }
  }

  console.log(newArr);
  return newArr;
}
merge([2], [1]);
merge([1, 3], [2, 4]);
