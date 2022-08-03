/*
Count letters in string

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

 */

const letterCount = s => {
  const arr = s.split('').sort().reduce((acc , el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return arr;
}