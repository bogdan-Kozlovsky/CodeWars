/*
Ones' Complement

The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:
 */

const onesComplement = (n) => n.split('').map(m => m === '0' ? m = '1' : m = '0').join('')