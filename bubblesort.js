function bubbleSort(arr) {
  debugger;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let cur = arr[j];
      let next = arr[j + 1];
      if (cur !== undefined && next !== undefined) {
        let newArr = swap(cur, next);
        arr[j] = newArr[0];
        arr[j + 1] = newArr[1];
        //   } else {
        //     arr[j] = cur;
        //     arr[j + 1] = next;
        //   }
      }
    }
  }
  console.log(arr);
  return arr;
}

function swap(cur, next) {
  debugger;
  let retArr = [];
  if (cur > next) {
    let temp = cur;
    cur = next;
    next = temp;
    retArr = [cur, next];
  }
  return retArr;
}
