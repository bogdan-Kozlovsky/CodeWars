/*
Remove consecutive duplicate words

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
 */

const removeConsecutiveDuplicates = s => {
    let newArr = []
    s = s.split(' ')
    for(let i = 0; i < s.length; i++){
        if(s[i] !== s[i + 1]){
            newArr.push(s[i])
        }
    }
    return newArr.join(' ')
}