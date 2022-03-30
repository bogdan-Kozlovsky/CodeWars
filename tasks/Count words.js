/*
Count words

Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:
 */

const countWords = (str) => str.split(/\s/g).filter(Boolean).length