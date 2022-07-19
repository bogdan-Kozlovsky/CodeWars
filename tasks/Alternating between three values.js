/*
Alternating between three values

Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies
 */

const f = (x, cc) => {
  let arr = Object.values(cc)

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === x && arr[i + 1] === 0) return 0;
    if(arr[i] === x) return arr[i + 1] || arr[0]
  }
}