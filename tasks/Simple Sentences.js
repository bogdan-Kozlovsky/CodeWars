/*
Simple Sentences

https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript
 */

function makeSentence(parts) {
    return parts.filter(f => f !== '.').join(' ').trim().replace(/ , /g, ', ') + '.';
}