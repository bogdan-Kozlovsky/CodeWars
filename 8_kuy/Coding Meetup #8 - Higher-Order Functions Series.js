/*
Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:
 */

function allContinents(list) {
    let newArr = []

    let static = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ]

    list.forEach(f => newArr.push(f.continent))
    return [...new Set(newArr)].length === static.length
}