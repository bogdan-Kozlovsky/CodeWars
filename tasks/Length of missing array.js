/*
Length of missing array

https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript
 */

const getLengthOfMissingArray = arrayOfArrays => {
    const lengths = (arrayOfArrays || [])
        .map(a => a ? a.length : 0)
        .sort((a, b) => a - b);

    if (lengths.includes(0)) {
        return 0;
    }

    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1
        }
    }

    return 0;
}