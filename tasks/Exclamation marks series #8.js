/*
Exclamation marks series #8: Move all exclamation marks to the end of the sentence

Move all exclamation marks to the end of the sentence

 */

const remove = string => string.split("!").join('') + string.split('').filter(item => item === '!').join('');
