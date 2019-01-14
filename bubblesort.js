function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let cur = arr[j];
      let next = arr[j + 1];
      if (cur !== undefined && next !== undefined && cur > next) {
        let newArr = swap(cur, next);
        arr[j] = newArr[0];
        arr[j + 1] = newArr[1];
      }
    }
  }
  console.log(arr);
  return arr;
}

function swap(cur, next) {
  let temp = cur;
  cur = next;
  next = temp;
  return [cur, next];
}
