/*
Where my anagrams at?

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
 */

function anagrams(word, words) {
    let newArr = []

    words.forEach(f => f.split('').sort((a , b) => a > b).join('') === word.split('').sort(( a, b) => a > b).join('')
        ? newArr.push(f)
        : null
    )
    return newArr
}