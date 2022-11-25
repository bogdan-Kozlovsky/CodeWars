/*
Find Count of Most Frequent Item in an Array

https://www.codewars.com/kata/56582133c932d8239900002e
 */

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;

    const findMaxElemCollection = Object.values(collection.reduce((acc, next) => {
        acc[next] = acc[next] ? acc[next] + 1 : 1;
        return acc
    }, {}));

    return Math.max(...findMaxElemCollection);
}
