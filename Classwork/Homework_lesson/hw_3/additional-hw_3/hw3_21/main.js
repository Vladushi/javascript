// let letters = ['a', 'b', 'c'];
// console.log(letters);
// let word = '';
// for (let i = 0; i < letters.length; i++) {
//     word = word + letters[i];
// }
// console.log(word);

// let letters = ['a', 'b', 'c'];
// console.log(letters);
// let word = '';
// let i = 0;
// while (i < letters.length) {
//     word = word + letters[i];
//     i++;
// }
// console.log(word);

let letters = ['a', 'b', 'c'];
console.log(letters);
let word = '';
for (let letter of letters) {
    word = word + letter;
}
console.log(word);
