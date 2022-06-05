/*
ASCII Total

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
 */

function uniTotal (string) {
  if(string.length === 0){
    return 0
  }
  let arr = string.split('').map(e => e.charCodeAt());
  return arr.reduce((acc, elem) => acc + elem)
}