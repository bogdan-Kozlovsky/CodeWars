/*
Valid Braces

https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
 */

const regex = /\(\)|\[\]|\{\}/;
const validBraces = braces => regex.test(braces)
    ? validBraces(braces.replace(regex, ''))
    : '' === braces;

