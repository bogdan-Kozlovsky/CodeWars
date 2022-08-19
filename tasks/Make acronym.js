/*
Make acronym

Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
 */

const toAcronym = inp => {
    return inp.split(' ').map(el => el[0].toUpperCase()).join('')
}