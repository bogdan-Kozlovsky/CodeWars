/*
Odd-Even String Sort

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
 */

const sortMyString = S => {
  let even = '';
  let odd = '';

  for(let i = 0; i < S.length; i++){
    if(i % 2 === 0) even += S[i];

    if(i % 2 !== 0) odd += S[i];
  }

  return `${even} ${odd}`
}