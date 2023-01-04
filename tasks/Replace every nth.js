/*
Replace every nth

https://www.codewars.com/kata/57fcaed83206fb15fd00027a/train/javascript
 */

function replaceNth(text, n, oldValue, newValue) {
    let i = 0
    return n > 0 ? text.replace(new RegExp(oldValue, "g"), c => ++i % n === 0 ? newValue : c) : text
}

console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o')); //"Vader soid: No, I am your fother!"
