/*
True Min

The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.
 */

const min = (a , b) => {
    a === null && (a = 0);
    b === null && (b = 0);
    if(isNaN(a) || isNaN(b)){
        return NaN
    }
    return a < b ? a : b
}