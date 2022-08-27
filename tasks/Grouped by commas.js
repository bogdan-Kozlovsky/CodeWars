/*
Grouped by commas

https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

 */

const groupByCommas = n => {
    return n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}