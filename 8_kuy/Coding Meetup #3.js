/*
Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:
 */

const isRubyComing = list => list.filter(f => f.language === 'Ruby').length ? true : false
