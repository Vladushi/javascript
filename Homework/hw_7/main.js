Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};

let users = [
    {name: 'vlad', age: 20, status: true},
    {name: 'igor', age: 50, status: false},
    {name: 'petya', age: 21, status: false},
    {name: 'vasya', age: 30, status: true},
    {name: 'anna', age: 42, status: true},
    {name: 'kate', age: 18, status: false},
    {name: 'ivan', age: 25, status: true},
    {name: 'alex', age: 35, status: false},
];
const result = users.myFilter(user => user.status);
console.log(result);
