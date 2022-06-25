/*
UEFA EURO 2016

Finish the uefaEuro2016() function so it return string just like in the examples below:
 */

function uefaEuro2016([t1,t2], [s1,s2]){
  if (s1 === s2) return `At match ${t1} - ${t2}, teams played draw.`
  if (s2 > s1) return `At match ${t1} - ${t2}, ${t2} won!`
  if (s2 < s1) return `At match ${t1} - ${t2}, ${t1} won!`
}