function foobar (users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

foobar([
{id: 1, name: 'vasya', age:30},
{id: 2, name: 'vasya', age:30},
{id: 3, name: 'vasya', age:30},
{id: 4, name: 'vasya', age:30},
{id: 5, name: 'vasya', age:30},
{id: 6, name: 'vasya', age:30},
]);
