let mixedArr = [1, 'hello', '123', false, -90, 'JS', true, 56.98];
console.log('Start array:', mixedArr);

let numbersArr = [];
for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === 'number') {
        numbersArr.push(mixedArr[i]);
    }
}
console.log('Numbers array:', numbersArr);
