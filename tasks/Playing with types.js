/*
Playing with types

JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.
 */

const typing = param => {

  if(typeof param === 'string') return `${typeof param}="${param}"`;

  if(typeof param === "boolean") return `${typeof param}=${param}`;

  if(Array.isArray(param)) return `${typeof param}=[${param}]`;

  if(typeof param === 'object') return `${typeof param}=${JSON.stringify(param)}`;

  if(!param) return "undefined";

  return `${typeof param}=${param}`
}