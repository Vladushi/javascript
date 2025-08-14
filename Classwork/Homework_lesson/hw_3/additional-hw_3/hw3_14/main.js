let arr = [];
// let evenArr = [];
// for (let i = 2; evenArr.length <50; i++) {
//     if (i % 2 === 0) {
//         evenArr.push(i);
//     }
// }
// console.log(evenArr);
// let oddArr = [];
// for (let i = 1; oddArr.length <50; i++) {
//     if (i % 2 !== 0) {
//         oddArr.push(i);
//     }
// }
// console.log(oddArr);
// let oddArr = [];
// for (let i = 1; oddArr.length <50; i += 2) {
//         oddArr.push(i);
// }
// console.log(oddArr);
// let randomArr = [];
// for (let i = 0; randomArr.length < 20; i++) {
//     randomArr.push(Math.floor(Math.random() * 101));
// }
// console.log(randomArr);
let min = 8;
let max = 732;
let range = max - min + 1;
let randomRangeArr = [];
for (let i = 0; i < 20; i++) {
    let random = Math.floor(Math.random() * range + min);
    randomRangeArr.push(random);
}
console.log(randomRangeArr);

// for (let i = 2; i < randomRangeArr.length; i += 3) {
//     console.log(randomRangeArr[i]);
// }
// for (let i = 2; i < randomRangeArr.length; i += 3) {
//     if (randomRangeArr[i] % 2 === 0) {
//         console.log(randomRangeArr[i]);
//     }
// }
// let thirdEvenArr = [];
// for (let i = 2; i < randomRangeArr.length; i += 3) {
//     if (randomRangeArr[i] % 2 === 0) {
//         thirdEvenArr.push(randomRangeArr[i]);
//     }
// }
// console.log(thirdEvenArr);

let neighborEvenArr = [];
for (let i = 0; i < randomRangeArr.length - 1; i++) {
    if (randomRangeArr[i + 1] % 2 === 0) {
        console.log(randomRangeArr[i]);
        neighborEvenArr.push(randomRangeArr[i]);
    }
}
console.log('Result:', neighborEvenArr);
