/*
Alphabetically ordered

https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript
 */

function alphabetic(s) {
    s.toLowerCase();
    const deleteDuplicateS = [...new Set(s)].join('');
    const sortS = [...deleteDuplicateS].sort();


    for (let i = 0; i < deleteDuplicateS.length; i++) {
        if (deleteDuplicateS[i] !== sortS[i]) {
            return false;
        }
    }

    return true;
}

console.log(alphabetic('cell'))
