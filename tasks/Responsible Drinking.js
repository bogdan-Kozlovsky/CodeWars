/*
Responsible Drinking

Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

 */

const hydrate = s => {
    let a = s.split('').map(m => +m).filter(f => f > 0).reduce((a,b) => a + b)
    return a === 1 ? `${a} glass of water` : `${a} glasses of water`
}