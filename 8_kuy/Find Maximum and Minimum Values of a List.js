/*
Find Maximum and Minimum Values of a List

Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples
 */

var min = function(list){
    let a = []
    a.push(Math.min(...list))
    return +a
}

var max = function(list){
    let a = []
    a.push(Math.max(...list))
    return +a
}