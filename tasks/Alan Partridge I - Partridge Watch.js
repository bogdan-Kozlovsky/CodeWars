/*
Alan Partridge I - Partridge Watch

https://www.codewars.com/kata/5808c8eff0ed4210de000008/train/javascript
 */

const part = x => {

    let count = 0;

    const arr = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (arr[i] === x[j]) {
                count++;
            }
        }
    }

    const questionMark = Array.from({length: count}, (_, i) => '!').join('');

    return !count ? 'Lynn, I\'ve pierced my foot on a spike!!' : `Mine\'s a Pint${questionMark}`;
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']));
