/*
Filter Coffee

https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
 */

function search(budget, prices) {
    return prices.filter(el => el <= budget).sort((a, b) => a - b).join(',');
}

console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));
