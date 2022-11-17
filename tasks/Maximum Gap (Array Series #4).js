/*
Maximum Gap (Array Series #4)

https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript
 */

function maxGap(numbers) {
    const sortNumbers = numbers.sort((a, b) => b - a);
    const results = [];

    for(let i = 0; i < sortNumbers.length - 1; i++){
        results.push(sortNumbers[i] - sortNumbers[i + 1])
    }

    return Math.max(...results);
}

console.log(maxGap([13, 10, 2, 9, 5]));
