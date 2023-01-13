/*
New Cashier Does Not Know About Space or Shift

https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript
 */

const getOrder = input => {
    const menu = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    const arr = [];
    for (let i = 0; i < menu.length; i++) {
        arr.push(input.match(new RegExp(`${menu[i]}`, 'gi')));
    }

    return arr.flat(Infinity).filter(el => el).map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
}

console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'));
