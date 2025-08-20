const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, cardValue: value};
        if (suit === 'hearts' || suit === 'diamonds') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        deck.push(card);
    }
}
console.log(deck);

console.log(deck.find(card => card.cardValue === 'ace' && card.cardSuit === 'spades'));
console.log(deck.filter(card => card.cardValue === '6'));
console.log(deck.filter(card => card.color === 'red'));
console.log(deck.filter(card => card.cardSuit === 'diamonds'));
console.log(deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.cardValue)));
