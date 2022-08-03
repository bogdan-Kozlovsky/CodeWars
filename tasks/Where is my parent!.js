/*
Where is my parent!?(cry)

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
 */

const findChildren = dancingBrigade => {
  let result = [];
  let a = [];
  const arr = dancingBrigade.toLowerCase().split('').sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      a.push(arr[i])
    } else {
      a.push(arr[i]);
      result.push(a);
      a = [];
    }
  }
  return result.map(el => el[0].toUpperCase() + el.slice(1)).join('').replace(/[\s,]/g, '');
}