/*
Twisted Sum

https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript
 */

const twistedSum = n => {
    return [...Array(n + 1).keys()].join('').split('').map(Number).reduce((acc , item) => acc + item);
}