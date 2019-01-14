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

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] < arrTwo[i]) {
      newArr.push(arrOne[i]);
    } else {
      newArr.push(arrTwo[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

merge([1, 2], [3, 4]);
