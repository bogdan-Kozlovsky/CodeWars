/*
Simple remove duplicates

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
 */

function solve(arr) {
    let answer = [];
    while (arr.length > 0) {
        const lastElem = arr.pop();
        if (!answer.includes(lastElem)) {
            answer.push(lastElem);
        }
    }
    return answer.reverse();
}