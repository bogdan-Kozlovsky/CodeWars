/*
Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 */

function highAndLow(numbers) {
    let a = numbers.split(' ').map(e => +e)
    let min = a[0]
    let max = a[0]
    a.forEach(n => {
        min = Math.min(min, n);
        max = Math.max(max, n);
    })
    return [max, min].join(' ')
}