/*
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.
 */

function nicknameGenerator(name){

  if(name.length < 4){
    return "Error: Name too short"
  }

  let str = 'aeiou';
  let arr = name.split('');


  for(let i = 0; i < name.length; i++){
    if(arr[2] === str[i]){
      return name.substr(0 , 4)
    }
  }

  return name.substr(0 , 3)

}