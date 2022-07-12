/*
Find the lucky numbers

Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

 */

const filterLucky= arr => arr.filter(item => String(item).includes(7));
