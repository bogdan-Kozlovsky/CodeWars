/*
Exclamation marks series #2: Remove all exclamation marks from the end of sentence

Description:
Remove all exclamation marks from the end of sentence.
 */

const remove = str =>  {
    let string = str.split('')
    for(let i = string.length - 1; i > 0 ; i--){
        if(string[i] === '!'){
            string.pop()
        } else {break}
    }
    return string.join('')
}