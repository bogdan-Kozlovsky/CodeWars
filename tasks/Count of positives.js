/*
Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.
 */

function countPositivesSumNegatives(input) {
    console.log(input)
    if(input === null || input.length === 0){
        return []
    }

    let a = 0;
    let b = 0;
    const arr = []

    for(let i = 0; i < input.length;i++){
        input[i] > 0 ? a++ : b += input[i]
    }
    arr.push(a)
    arr.push(b)

    return arr
