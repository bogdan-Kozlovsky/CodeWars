/*
Coding Meetup #14 - Higher-Order Functions Series - Order the food

https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

 */

const orderFood = list => {

    return list.map(el => el.meal).reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});

}