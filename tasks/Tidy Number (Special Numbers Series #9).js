/*
Tidy Number (Special Numbers Series #9)

https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
 */

function tidyNumber(n) {
    let arr = [...n.toString()].map(Number);

    return arr.every((el, ind, arr) => !ind || el >= arr[ind - 1]);
}
