/*
Tea for two

https://www.codewars.com/kata/555a7dc335d4c407af00006e/train/javascript
 */

function tea42(input) {
    return [...input.toString()].map(el => el === '2' ? 't' : el).join('');
};

