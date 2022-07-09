/*
Even or Odd - Which is Greater?

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
 */

function evenOrOdd(str) {

  const array = str.split('');

  let odd = [];
  let even = [];

  for(let i = 0; i < array.length; i++){
    array[i] = Number(array[i])
    array[i] % 2 === 0 ? even.push(array[i]) : odd.push(array[i])
  }

  odd = odd.reduce((acc, item) => acc + item, 0);
  even = even.reduce((acc, item) => acc + item , 0);

  if(even > odd) return 'Even is greater than Odd';
  if(even < odd) return 'Odd is greater than Even';
  if(even === odd) return 'Even and Odd are the same';
}