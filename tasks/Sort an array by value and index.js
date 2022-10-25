/*
Sort an array by value and index

https://www.codewars.com/kata/58e0cb3634a3027180000040/train/javascript
 */

const sortByValueAndIndex = array => {
    return array.map((arr,index) => [arr, arr * (index + 1)]).sort((a,b) => a[1] - b[1]).map(el => el[0]);
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5])) // [ 2, 3, 4, 23, 5 ]
