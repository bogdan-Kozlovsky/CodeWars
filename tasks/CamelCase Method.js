/*
CamelCase Method

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
 */

String.prototype.camelCase = function () {
  return this.split(' ').map((item, i, arr) => item.charAt(0).toUpperCase() + item.slice(1)).join('');
}

