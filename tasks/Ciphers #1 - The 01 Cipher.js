/*
Ciphers #1 - The 01 Cipher

https://www.codewars.com/kata/593f50f343030bd35e0000c6/train/javascript
 */

const encode = plaintext => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i].toLowerCase();
        const index = alphabet.indexOf(char);

        if (index !== -1) {
            result += (index % 2 === 0) ? '0' : '1';
        } else {
            result += plaintext[i];
        }
    }

    return result;
}

console.log(encode('Hello World!'));
