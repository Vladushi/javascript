let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 10) + 1);
}
console.log('Initial array:', randomArr);

let multipliedArr = [];
for (let i = 0; i < randomArr.length; i++) {
    multipliedArr.push(randomArr[i] * 5);
}
console.log('Multiplied array:', multipliedArr);
