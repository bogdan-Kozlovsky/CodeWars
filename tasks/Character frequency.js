/*
Character frequency

Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:
 */

const letterFrequency = text => {
    if (text.length === 0) return [];
    const arr = text.toLowerCase().replace(/[^a-z]/ig, '').split('').sort().reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {});

    const values = Object.entries(arr);
    const sort = values.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    return sort;
}