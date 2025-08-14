let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(originalArray);

let copiedArray = [];
for (let i = 0; i < originalArray.length; i++) {
    copiedArray.push(originalArray[i]);
}
console.log(copiedArray);
