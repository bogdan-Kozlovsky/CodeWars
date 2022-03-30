/*
Maximum Product

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
 */

function adjacentElementsProduct(array) {
    let count = -1000000

    for(let i = 0; i < array.length; i++){
        if(array[i] * array[i + 1] > count){
            count = array[i] * array[i + 1]
        }
    }
    return count
}