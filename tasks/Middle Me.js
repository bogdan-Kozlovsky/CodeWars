/*
Middle Me

https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript
 */
function middleMe(N, X, Y) {
    if (N % 2 !== 0) {
        return X;
    }

    const arr = [...Array(N).keys()].map(el => Y).slice(0, N / 2).join('');

    return `${arr}${X}${arr}`;
}

console.log(middleMe(2, '7', ','));
