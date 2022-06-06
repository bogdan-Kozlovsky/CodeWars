/*
Minimum Steps (Array Series #6)

Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
 */

function minimumSteps(numbers, value){
  return  numbers.sort((a , b) => a - b).filter(number => (value -= number) > 0).length
}