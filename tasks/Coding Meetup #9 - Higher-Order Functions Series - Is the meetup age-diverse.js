/*
Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

https://www.codewars.com/kata/5829ca646d02cd1a65000284

вірно, якщо зареєструвалися розробники з усіх наступних вікових груп: підлітки, двадцятирічні, тридцятирічні, сорокові, п’ятдесятирічні, шістдесятничі, сімдесятирічні, вісімдесяти, дев’яносторічні, столітні (щонайменше 100 років).
 */

function isAgeDiverse(list) {
    const check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    list.map(v => {
        const age = v.age;
        age > 9 && age < 20 ? check[0] = 1 : 0;
        age > 19 && age < 30 ? check[1] = 1 : 0;
        age > 29 && age < 40 ? check[2] = 1 : 0;
        age > 39 && age < 50 ? check[3] = 1 : 0;
        age > 49 && age < 60 ? check[4] = 1 : 0;
        age > 59 && age < 70 ? check[5] = 1 : 0;
        age > 69 && age < 80 ? check[6] = 1 : 0;
        age > 79 && age < 90 ? check[7] = 1 : 0;
        age > 89 && age < 100 ? check[8] = 1 : 0;
        age > 100 ? check[9] = 1 : 0;
    })
    return check.every(v => v === 1)
}
