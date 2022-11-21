/*
Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

https://www.codewars.com/kata/582887f7d04efdaae3000090
 */

function findSenior(list) {
    list.sort((a, b) => b.age - a.age);

    const result = [];

    for (let i = 0; i < list.length - 1; i++) {
        if (list[0].age === list[i].age) {
            result.push(list[i])
        }
    }

    return result;
}

let list3 = [
    { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
    { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
    { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Europe', age: 28, language: 'Java' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
    { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' },
    { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
];

console.log(findSenior(list3));
