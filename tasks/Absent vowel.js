/*
Absent vowel

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
 */


function absentVowel(x) {

  const str = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };

  const newArr = x.split('');

  for (key in str) {
    if (!newArr.includes(key)) {
      return str[key]
    }
  }

}