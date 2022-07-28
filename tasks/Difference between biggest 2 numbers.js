/*
Difference between biggest 2 numbers

You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

    diffBig2([10, 5, 2]);
In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

You can assume that the input array has 2 or more elements.

The input array has the sort method disabled, so you will have to solve it in another way.
 */

const diffBig2 = arr => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        const buff = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = buff;
      }
    }
  }
  return arr[arr.length - 1] - arr[arr.length - 2];
}