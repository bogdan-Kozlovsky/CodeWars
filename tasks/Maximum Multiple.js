/*
Maximum Multiple

Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.
 */

function maxMultiple(divisor, bound) {
  let a = 0
  for (let i = bound; i >= divisor; i--) {
    if (i % divisor === 0 && i <= bound && bound > 0) {
      return a = i
    }
  }
}