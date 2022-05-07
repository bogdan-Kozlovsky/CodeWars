/*
Row Weights

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
 */

function rowWeights(array){
    let even = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    }
    return [even.reduce((a,b) => a + b, 0), odd.reduce((a,b) => a + b, 0)];
}