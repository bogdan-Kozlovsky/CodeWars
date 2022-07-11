/*

Mexican Wave

https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
 */

function wave(str){
  if(str.length === 0) return [];

  const result = [];

  let arr = str.split('');


  for(let i = 0; i < str.length; i++){
    if(arr[i] === ' ') continue;
    arr[i] = arr[i].toUpperCase();
    result.push(arr.join(''));

    arr[i] = arr[i].toLowerCase();
  }

  return result;
}