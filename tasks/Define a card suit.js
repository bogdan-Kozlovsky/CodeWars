/*
Define a card suit

You get any card as an argument. Your task is to return a suit of this card.


 */

function defineSuit(card) {
    const newStr = card.substr(-1);
    switch(newStr){
        case '♣': return 'clubs';
        case '♦': return 'diamonds';
        case '♥': return 'hearts';
        default: return 'spades';
    }
}