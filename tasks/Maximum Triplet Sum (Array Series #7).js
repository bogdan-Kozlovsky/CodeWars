/*
Maximum Triplet Sum (Array Series #7)

https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
 */

const  maxTriSum = numbers => {
    const arr = [...new Set(numbers)].sort((a , b) => b - a);

    return arr.slice(0 , 3).reduce((acc , item) => Number(item) + acc)
}