function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name =name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client (1, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}]),
    new Client (2, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}, {title: 'tv', price: 12000}]),
    new Client (3, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000},{title: 'tv', price: 12000}, {title: 'tv', price: 12000}]),
    new Client (4, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}]),
    new Client (5,'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}, {title: 'tv', price: 12000}]),
    new Client (6, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}, {title: 'tv', price: 12000}, {title: 'tv', price: 12000}, {title: 'tv', price: 12000}]),
    new Client (7, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}, {title: 'tv', price: 12000}]),
    new Client (8, 'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}]),
    new Client (9,'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}, {title: 'tv', price: 12000},{title: 'tv', price: 12000}]),
    new Client (10,'vasya', 'ivanov',
        'vasyaivanov@gmail.com', '+380928374893', [{title: 'tv', price: 12000}]),
];
const sort = clients.sort ((a,b) => a.order.length - b.order.length);
console.log(sort);
