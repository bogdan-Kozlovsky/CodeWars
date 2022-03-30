/*
Sum of positive

Example [1,-4,7,12] => 1 + 7 + 12 = 20
 */


function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}