/*
Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:
 */

const sortByLanguage = list => {
    return list.sort(function (a, b) {
        if (a.language === b.language) return a.firstName.localeCompare(b.firstName);
        return a.language.localeCompare(b.language)
    });
}