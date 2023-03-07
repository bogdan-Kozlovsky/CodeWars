/*
Find the Capitals

https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript
 */

const capital = capitals => {
    return capitals.map(obj => {
        if (obj.hasOwnProperty('state')) {
            return "The capital of " + obj.state + " is " + obj.capital;
        } else if (obj.hasOwnProperty('country')) {
            return "The capital of " + obj.country + " is " + obj.capital;
        }
    });
}

console.log(capital([{state: 'Maine', capital: 'Augusta'}]))

