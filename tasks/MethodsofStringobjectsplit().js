/*
Training JS #18: Methods of String object--concat() split() and its good friend join()

codewars.com/kata/57280481e8118511f7000ffa/train/javascript
 */

function splitAndMerge(string, separator) {
    const words = string.split(' ');

    return words.map(word => word.split('').join(separator)).join(' ').replace(/\s+/g, ' ');
}

console.log(splitAndMerge('My name is John', '.'))
