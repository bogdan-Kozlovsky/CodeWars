/*
Sum Factorial

https://www.codewars.com/kata/56b0f6243196b9d42d000034/train/javascript
 */

function sumFactorial(arr) {
    const factorials = [];
    let sum = 0;

    function factorialOf(number) {
        if (number <= 1) {
            return 1;
        }

        if (factorials[number]) {
            return factorials[number];
        }

        factorials[number] = number * factorialOf(number - 1);
        return factorials[number];
    }

    for (let i = 0; i < arr.length; i++) {
        sum += factorialOf(arr[i]);
    }

    return sum;
}

console.log(sumFactorial([4, 6]))
