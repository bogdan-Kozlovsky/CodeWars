/*
Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript
 */

const askForMissingDetails = list => {
    let res = [];
    list.map(list => {
        for (let i in list) {
            if (list[i] === null) {
                list = {...list, question: `Hi, could you please provide your ${i}.`}
                res.push(list);
            }
        }
    })
    return res;
}