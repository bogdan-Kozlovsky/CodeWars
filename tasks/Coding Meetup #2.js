/*
Coding Meetup #2

You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:
 */

const greetDevelopers =  list => list.map(m => ({...m,greeting:`Hi ${m.firstName}, what do you like the most about ${m.language}?`}))