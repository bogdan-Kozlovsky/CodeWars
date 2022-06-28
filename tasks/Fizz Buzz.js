/*
Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:
 */

function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  for (let i = 0; i < result.length; i++) {

    if (result[i] % 5 === 0 && result[i] % 3 === 0) {
      result[i] = 'FizzBuzz';
    }

    if (result[i] % 3 === 0) {
      result[i] = 'Fizz';
    }

    if (result[i] % 5 === 0) {
      result[i] = 'Buzz';
    }
  }
  return result;
}

