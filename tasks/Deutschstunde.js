/*
Deutschstunde

https://www.codewars.com/kata/552cd8624a414ec2b2000086/train/javascript
 */

function derDieDas(wort) {
    let copyWort = wort.toLowerCase().replace(/[aeiouäöü]/gi, '');
    const difference = wort.length - copyWort.length;

    if (difference < 2) {
        return `das ${wort}`;
    }
    if (difference >= 2 && difference <= 3) {
        return `die ${wort}`;
    }
    if (difference > 3) {
        return `der ${wort}`;
    }
}
