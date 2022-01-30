/*
Double Every Other

Write a function that doubles every second integer in a list, starting from the left.
 */

const doubleEveryOther = a =>  a.map((m , i) => i % 2 ? m * 2 : m)