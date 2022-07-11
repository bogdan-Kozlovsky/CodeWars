/*
Adding remainders to a list

This is a problem that involves adding numbers to items in a list. In a list you will have to add the item's remainder when divided by a given divisor to each item.

For example if the item is 40 and the divisor is 3 you would have to add 1 since 40 minus the closest multiple of 3 which is 39 is 1. So the 40 in the list will become 41. You would have to return the modified list in this problem.

For this problem you will receive a divisor called div as well as simple list of whole numbers called nums. Good luck and happy coding
 */

const solve = (nums, div) => nums.map(item => item += item % div);
