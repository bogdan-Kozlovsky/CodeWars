/*
Sum a list but ignore any duplicates

https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
 */

const sumNoDuplicates = numList => {
    // if (!numList.length) {
    //     return 0;
    // }
    //
    // const countList = Object.entries(numList.reduce((acc, next) => {
    //     acc[next] = acc[next] ? acc[next] + 1 : 1;
    //     return acc;
    // }, {}));
    //
    // const filterCountList = countList.filter(elem => elem[1] === 1).map(el => el[0]);
    //
    // return filterCountList.reduce((acc, elem) => acc + Number(elem), 0);


    // The second solution option
    let sum = 0;

    const count = {};

    numList.forEach(num => {
        count[num] = (count[num] || 0) + 1;
        if (count[num] === 1) {
            sum += num;
        } else if (count[num] === 2) {
            sum -= num;
        }
    });

    return sum;
}

console.log(sumNoDuplicates([1, 1, 2, 3]));

