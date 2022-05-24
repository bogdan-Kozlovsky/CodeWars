/*
Total amount of points

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
 */

const points = games => {
    let acc = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i][0] > games[i][2]) {
            acc += 3;
        }
        if (games[i][0] < games[i][2]) {
            acc += 0;
        }
        if (games[i][0] === games[i][2]) {
            acc += 1;
        }
    }
    return acc;
};