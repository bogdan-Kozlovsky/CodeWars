/*
Mumbling

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 */

function accum(s) {
    const result = []

    for (let i = 0; i < s.length; i++) {
        result.push(s[i].toLowerCase().repeat(i + 1))
    }

    return result.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('-')
}

console.log(accum('ZpglnRxqenU'))
