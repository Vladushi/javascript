let users = [10, true, 'alina', 67.8, null, false, -98, '123', 'hello world', true];
for (let i = 0; i < users.length; i++) {
    // if (typeof users[i] === 'boolean') {
    //     console.log(users[i]);
    // }
    // if (typeof users[i] === 'number') {
    //     console.log(users[i]);
    // }
    if (typeof users[i] === 'string') {
        console.log(users[i]);
    }
}
