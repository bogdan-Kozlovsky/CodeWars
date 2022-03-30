/*
Credit Card Mask

Your task is to write a function maskify, which changes all but the last four characters into '#'.
 */

const  maskify = (cc) => cc.split('').map((m, i, arr) => i < arr.length - 4 ? '#' : m ).join('')