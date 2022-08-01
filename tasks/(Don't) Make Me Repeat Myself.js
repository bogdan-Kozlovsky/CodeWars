/*
(Don't) Make Me Repeat Myself

There's a built-in function called repeat on strings. It repeats the given string N times.

 */

String.prototype.repeat = function(count) {
  const str = String(this);
  const result = [];
  for(let i = 0; i < count; i++){
    result.push(str)
  }

  return result.join('')
};