/*
Adding useful functional functionality to JavaScript arrays

https://www.codewars.com/kata/52195c9bb576caf14200007f/train/javascript
 */

Array.range = function(start, count) {
    return Array.from({length: count}, (_, i) => start + i);
}

Array.prototype.sum = function() {
    return this.reduce((acc,el) => acc + el, 0)
}
