/*
Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
 */

function well(x){
    let a = 0
    x.forEach(f => f === 'good' ? a = a + 1 : '')

    return a === 0 ? 'Fail!' : a <= 2 ? 'Publish!' : 'I smell a series!'
}