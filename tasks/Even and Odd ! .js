/*
Even and Odd !

Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

 */

function evenAndOdd(num){

  let arr = num.toString().split('');

  let even = '';
  let odd = '';
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 === 0 ? even += arr[i] : odd += arr[i]
  }

  return [Number(even) , Number(odd)]
}