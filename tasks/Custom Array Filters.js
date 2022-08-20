/*
Custom Array Filters

Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.
 */

Array.prototype.even = function () {
    return this.filter(el => el % 2 === 0 && typeof el === 'number' && el !== 0 && Number.isInteger(el))
}

Array.prototype.odd = function () {

    return this.filter(el => el % 2 !== 0 && typeof el === 'number' && Number.isInteger(el))
}

Array.prototype.under = function (x) {
    return this.filter(el => el < x && typeof el === 'number' && Number.isInteger(el))
}

Array.prototype.over = function (x) {
    return this.filter(el => el > x && typeof el === 'number' && Number.isInteger(el))
}

Array.prototype.inRange = function (min, max) {
    return this.filter(el => el >= min && el <= max && typeof el === 'number' && Number.isInteger(el))
}