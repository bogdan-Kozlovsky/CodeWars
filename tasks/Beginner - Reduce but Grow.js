/*
Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:


 */

function grow(x){
    let a = 1
    for(let i = 0; i < x.length;i++){
        a *= x[i]
    }
    return a
}