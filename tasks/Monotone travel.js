/*
Monotone travel

Peter lives on a hill, and he always moans about the way to his home. "It's always just up. I never get a rest". But you're pretty sure that at least at one point Peter's altitude doesn't rise, but fall. To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way back at the next day.

 */

const isMonotone = arr => {
  return arr.every(( x , i) => i === 0|| arr[i] >= arr[i - 1]) ? true : false;
}