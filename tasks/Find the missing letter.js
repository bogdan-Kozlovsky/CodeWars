/*
Find the missing letter

https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
 */

const missingLetter = (array) => {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const findIndex = arr_en.indexOf(array[0]);
    const copyArray = arr_en.slice(findIndex)

    return copyArray.find((letter) => !array.includes(letter));
}

function findMissingLetter(array) {

    const firstElementArray = array[0];
    if (firstElementArray === firstElementArray.toLowerCase()) {
        return missingLetter(array);
    } else {
        return missingLetter(array.map(element => element.toLowerCase())).toUpperCase();
    }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
