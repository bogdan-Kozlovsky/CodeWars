/*
Switcheroo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
 */

const switcheroo = x => x.split('').map(item => item === 'a' ? item = 'b' : item === 'b' ? item = 'a' : item)
