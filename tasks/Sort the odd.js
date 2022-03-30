/*
Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 */

function sortArray(array) {
    if(array === []) return []
    let newArr = array.filter(f => f % 2).sort((a, b) => a - b)

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2){
            array[i] = newArr[0]
            newArr.shift()
        }
    }

    return array
}