/*
Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
 */

const roundToNext5 = n => {
    if (n === 0) return 0;
    if (n % 5 === 0) return n;
    let result;

    let i = n
    while (i < n + 5) {
        if (i % 5 === 0) {
            result = i;
            break;
        }
        i++
    }

    return result;
}