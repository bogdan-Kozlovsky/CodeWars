/*
Olympic Rings

https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript
 */

function olympicRing(a) {
    let count = 0;
    a.split('').map(v => /[abdegopqADOPQR]/.test(v) ? count++ : v === 'B' ? count += 2 : count += 0);
    count = Math.floor(count / 2)

    return count === 2 ? 'Bronze!' : count === 3 ? 'Silver!' : count >= 4 ? 'Gold!' : 'Not even a medal!'
}

console.log(olympicRing('wHjMudLwtoPGocnJ'));
