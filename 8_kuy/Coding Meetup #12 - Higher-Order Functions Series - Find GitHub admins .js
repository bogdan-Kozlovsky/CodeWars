/*
Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:


 */

const findAdmin = (list, lang) => list.filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes')