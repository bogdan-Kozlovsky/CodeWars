/*
Find the index of the second occurrence of a letter in a string

https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
 */

const secondSymbol = (s, symbol) => {
    if (s.indexOf(symbol) !== -1) {
        const index = s.indexOf(symbol);

        s = s.substring(0, index) + "0" + s.substring(index + 1);

        return s.indexOf(symbol);
    } else {
        return -1;
    }
}

console.log(secondSymbol('Hello world!!!', 'l'))
