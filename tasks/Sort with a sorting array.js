/*
Sort with a sorting array

Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.


 */

function sort(initialArray, sortingArray) {
    let arr = []
    for(let i = 0; i < initialArray.length; i++){
        arr.push(initialArray[sortingArray.indexOf(i)])
    }
    return arr
}