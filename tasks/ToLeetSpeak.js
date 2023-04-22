/*
ToLeetSpeak

https://www.codewars.com/kata/57c1ab3949324c321600013f/train/javascript
 */

const toLeetSpeak = (str) => {
    let result = '';

    const toLeetSpealAlphabet = {
        A: '@',
        B: '8',
        C: '(',
        D: 'D',
        E: '3',
        F: 'F',
        G: '6',
        H: '#',
        I: '!',
        J: 'J',
        K: 'K',
        L: '1',
        M: 'M',
        N: 'N',
        O: '0',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: '$',
        T: '7',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: '2',
        " ": ' '
    }

    for (let i = 0; i < str.length; i += 1) {
        result += toLeetSpealAlphabet[str[i]];
    }

    return result;
}

console.log(toLeetSpeak('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')); // 7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06
