/*
ScholarStem: Unit 6- Baby count!

https://www.codewars.com/kata/5702f077e55d30a7af000115/train/javascript
 */

const countName = (anArr, name) => anArr.filter(el => el === name).length;

console.log(countName(["Bob","Ted","Amy","Alice","Bob","Ted","Amy","Ted","Amy","Fred"], "Ted"))
