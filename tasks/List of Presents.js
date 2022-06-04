/*
List of Presents

Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
 */

function howManyGifts(maxBudget, gifts){
  gifts = gifts.sort((a, b) => a - b)
  let sum = 0;
  let i = 0;
  while (maxBudget >= sum) {
    sum += gifts[i]
    i++
  }
  return i - 1
}