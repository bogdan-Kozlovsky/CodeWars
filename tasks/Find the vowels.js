/*
Find the vowels

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].
 */

function vowelIndices(word){
    let arr = []
    let a = word.split('');
    for (let i = 0;i < word.length; i++){
        if (/[aeuoiy]/gi.test(a[i])) {arr.push(i+1)}
    }
    return arr
}