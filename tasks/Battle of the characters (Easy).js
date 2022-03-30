/*
Battle of the characters (Easy)

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.


 */

function battle(x, y) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let resultX = 0
    let resultY = 0
    for(let i = 0; i < x.length; i++){
        resultX += (arr_EN.indexOf(x[i])+1)
    }
    for(let i = 0; i < y.length; i++){
        resultY += (arr_EN.indexOf(y[i])+1)
    }
    return resultX > resultY ? x : resultX < resultY ? y : 'Tie!'
}