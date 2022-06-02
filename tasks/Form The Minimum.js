/*
Form The Minimum

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

 */

const minValue = values => {
    const newArrSort = values.sort()
    return +[... new Set(newArrSort)].join('')
}