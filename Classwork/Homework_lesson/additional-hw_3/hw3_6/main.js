let users = [
    {name: 'vasya', age: 50, status: true},
    {name: 'anna', age: 31, status: false},
    {name: 'marina', age: 23, status: false},
    {name: 'igor', age: 40, status: true},
    {name: 'ivan', age: 30, status: false},
    {name: 'maria', age: 45, status: false},
    {name: 'olga', age: 36, status: true},
    {name: 'sergei', age: 52, status: false},
    {name: 'tamara', age: 45, status: true},
    {name: 'vasya', age: 65, status: false},
];
for (let i = 0; i < users.length; i++) {
    console.log(users[i], users[i].age, users[i].status);
}
