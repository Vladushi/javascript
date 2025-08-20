const suits = ['heart', 'diamond', 'club', 'spade'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, cardValue: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        deck.push(card);
    }
}
console.log(deck);

const reduce = deck.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'heart':
            accumulator.hearts.push(card);
            break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
                case 'club':
                    accumulator.clubs.push(card);
                    break;
                    case 'spade':
                    accumulator.spades.push(card);
                    break;
    }
    return accumulator;
}, {
    hearts: [],
    diamonds: [],
    clubs: [],
    spades: []
});
console.log(reduce);
