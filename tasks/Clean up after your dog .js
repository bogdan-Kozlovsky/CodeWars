/*
Clean up after your dog

https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
 */

function crap(x, bags, cap) {
    const arr = x.flat(Infinity).filter(el => el !== '_');

    if (arr.includes('D')) return 'Dog!!';

    return arr.length <= bags && arr.length <= cap ? 'Clean' : 'Cr@p';
}

console.log(crap([["_","_","_"],["_","_","_"],["_","@","_"]], 9, 2));
