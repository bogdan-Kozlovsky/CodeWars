/*
What dominates your array?

https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript
 */

function dominator(arr) {
    let countItems = {};

    for (let i = 0; i < arr.length; i++) {
        if (countItems[arr[i]]) {
            countItems[arr[i]]++;
        } else {
            countItems[arr[i]] = 1;
        }
    }

    let maxCount = 0;
    let dominator = null;

    for (let item in countItems) {
        if (countItems[item] > maxCount) {
            maxCount = countItems[item];
            dominator = item;
        }
    }

    if (maxCount > arr.length / 2) {
        return Number(dominator);
    } else {
        return -1;
    }
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]))
