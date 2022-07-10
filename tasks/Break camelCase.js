/*
Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.
 */

const solution = string => string.replace(/([A-Z])/g, ' $1');
