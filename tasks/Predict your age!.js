/*
Predict your age!

My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
 */

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let a = age1 * age1;
  let b = age2 * age2;
  let c = age3 * age3;
  let d = age4 * age4;
  let e = age5 * age5;
  let f = age6 * age6;
  let g = age7 * age7;
  let h = age8 * age8;
  let sum = a + b + c + d + e + f + g + h;
  return  Math.floor(Math.sqrt(sum) / 2)
}