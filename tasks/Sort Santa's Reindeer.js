/*
Sort Santa's Reindeer

https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript
 */

function sortReindeer(reindeerNames) {
    return [...reindeerNames].sort((currentName, nextName) =>
        currentName.split(' ')[1].localeCompare(nextName.split(' ')[1])
    )
}


console.log(sortReindeer([
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
    "Donder Jonker",
    "Blitzen Claus"
]));


