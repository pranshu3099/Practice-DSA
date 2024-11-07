function MaxSubArray(arr) {
  let sum = 0;
  let max = -99999999999;
  let start = 0;
  let ansStart = 0;
  let ansEnd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) start = i;
    sum = sum + arr[i];
    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  if (max < 0) {
    max = 0;
  }

  return { max: max, ansStart: ansStart, ansEnd: ansEnd };
}

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(MaxSubArray(arr));

//tc:O(N) and sc:O(1)
