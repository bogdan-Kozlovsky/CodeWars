/*
Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
 */

// const basicOp = (operation, value1, value2) =>
//     eval(`${value1} ${operation} ${value2}`)


const basicOp = (operation, value1, value2) => {
    return eval(`${value1}
    ${operation}
    ${value2}`)
}