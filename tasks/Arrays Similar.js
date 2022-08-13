/*
Arrays Similar

Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
 */

const arraysSimilar = (arr1, arr2) => {
    const sortArray = (array) => {
        return array.sort((a , b) => a - b);
    }

    const a = sortArray(arr1);
    const b = sortArray(arr2);
    if (a.length !== b.length) return false;

    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false;
    }

    return true;
}