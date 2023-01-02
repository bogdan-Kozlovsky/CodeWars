/*
Slaphead

https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript
 */

function bald(x) {
    let count = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === '/') ++count;
    }

    let dashArr = Array(x.length).fill(undefined, undefined, undefined).map((_, i) => '-').join('')

    if (count === 0) return [dashArr, "Clean!"];
    if (count === 1) return [dashArr, "Unicorn!"];
    if (count === 2) return [dashArr, "Homer!"];
    if (count > 5) return [dashArr, "Hobo!"];
    if (count >= 3 || count <= 5) return [dashArr, "Careless!"];
}

