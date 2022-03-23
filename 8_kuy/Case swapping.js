/*
Case swapping

Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS
 */

const swap = str => str.split('').map(m => m === m.toUpperCase() ? m = m.toLowerCase() : m.toUpperCase()).join('')