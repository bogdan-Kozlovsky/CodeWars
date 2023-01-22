/*
Order of weight

https://www.codewars.com/kata/59ff4709ba2a14501500003a/train/javascript
 */

function arrange(arr) {
    const sorted = (w) => {
        if (w.slice(-2) === 'KG') {
            return +w.slice(0, -2);
        } else if (w.slice(-1) === 'T') {
            return +w.slice(0, -1) * 1000
        } else {
            return +w.slice(0, -1) * 0.001;
        }
    };
    return arr.sort((a, b) => sorted(a) - sorted(b));
}

console.log(arrange(["200G", "300G", "150G", "100KG"]));
