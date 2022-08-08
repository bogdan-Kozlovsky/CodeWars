/*
Dashatize it

Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".
 */

const dashatize = num => {
    if (Number.isNaN(num)) return 'NaN';

    return Math.abs(num)
        .toString()
        .split('')
        .map((n, i, a) => {
            const isFirstLetter = i === 0;
            const isLastLetter = i === a.length - 1;
            const isOdd = Boolean(+n % 2);
            const isNextOdd = Boolean(+a[i + 1] % 2);
            const isPrevOdd = Boolean(+a[i - 1] % 2);
            return isFirstLetter ? n : isOdd || isPrevOdd ? `-${n}` : `${n}`;
        })
        .join('');
};