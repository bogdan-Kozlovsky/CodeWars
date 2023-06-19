/*
Anagram Detection

https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
 */

const isAnagram = (test, original) => {
    const sortedArgument = (array) => {
        return array.toLowerCase().split('').sort().join('');
    }

    return sortedArgument(test) === sortedArgument(original);
};

console.log(isAnagram("Buckethead", "DeathCubeK"))
