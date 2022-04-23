/*
Build a square

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
 */

function generateShape(integer){
    let a = ''
    let b = []
    for(let i = 0; i < integer; i++){
        a += '+'
    }

    for(let i = 0; i < integer; i++){
        b.push(a)
    }
    return b.join('\n')

}