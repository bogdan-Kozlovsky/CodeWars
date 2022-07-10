/*
Random case

Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).
 */

const randomCase = x => {
  return x.split('')
    .map(e =>  Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase() )
    .join('');
}