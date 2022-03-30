/*
Closure Counter

Define the function counter that returns a function that returns an increasing value.
 */

function counter(){
    let i = 1;
    return function () {
        return i++;
    };
}