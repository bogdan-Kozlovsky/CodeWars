/*
Alphabet war

https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
 */

function alphabetWar(fight) {
    let left = ['s', 'b', 'p', 'w'];
    let right = ['z', 'd', 'q', 'm'];

    let resultLeft = 0;
    let resultRight = 0;

    for (let i = 0; i < fight.length; i++) {
        resultLeft += left.indexOf(fight[i]) + 1;
        resultRight += right.indexOf(fight[i]) + 1;
    }

    if (resultRight === resultLeft) {
        return "Let's fight again!"
    }

    return resultLeft > resultRight ? "Left side wins!" : "Right side wins!";
}

console.log(alphabetWar('zdqmwpbs'))
