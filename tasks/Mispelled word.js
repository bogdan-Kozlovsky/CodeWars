/*
Mispelled word

https://www.codewars.com/kata/5892595f190ca40ad0000095
 */

function mispelled(word1, word2) {
    if (word1 === word2) {
        return true;
    }

    if (Math.abs(word1.length - word2.length) > 1) {
        return false;
    }

    let i = 0;
    let j = 0;
    let diffCount = 0;
    while (i < word1.length && j < word2.length) {
        if (word1[i] !== word2[j]) {
            diffCount++;
            if (word1.length > word2.length) {
                i++;
            } else if (word2.length > word1.length) {
                j++;
            } else {
                i++;
                j++;
            }
        } else {
            i++;
            j++;
        }
        if (diffCount > 1) {
            return false;
        }
    }
    if (i < word1.length || j < word2.length) {
        diffCount++;
    }
    return diffCount === 1;
}

console.log(mispelled('versed', 'aversed'));

