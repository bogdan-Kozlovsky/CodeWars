/*
Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
 */

const highestRank = arr => {
    const countItems = arr.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
        return acc;
    }, {});

    const a = Object.values(countItems).lastIndexOf(Math.max(...Object.values(countItems)));
    return Number(Object.keys(countItems)[a]);
};
