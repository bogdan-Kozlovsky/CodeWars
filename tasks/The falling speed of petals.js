/*

The falling speed of petals

Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

 */

const sakuraFall = v => (v <= 0 ? 0 : 400 / v)