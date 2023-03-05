/*
Interview Question (easy)

https://www.codewars.com/kata/5b358a1e228d316283001892
 */

const getStrings = city => {
    const letters = city.toLowerCase().replace(/\s/g, '').split('');

    const count = letters.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;

        return acc;
    }, {});

    return Object.entries(count)
        .map(([key, value]) => `${key}:${'*'.repeat(value)}`).join(',');
}

console.log(getStrings("Chicago"));
