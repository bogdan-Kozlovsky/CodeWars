/*
Array.prototype.reverse()

https://www.codewars.com/kata/53b2ff49b82af296ce001139/train/javascript
 */

Array.prototype.reverse = function(arr) {
    for(let i = 0, j = this.length - 1; i < j; i++, j--){
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp
    }

    return this;
};
