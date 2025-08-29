function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Olga', 'Ivanova', 'olgaivanova@gmail.com', '+734283630189374'),
    new User(2, 'Anna', 'Ivanova', 'annaivanova@gmail.com', '+7342878678689374'),
    new User(3, 'Sasha', 'Ivanov', 'sashaivanov@gmail.com', '+5463366655374'),
    new User(4, 'Rita', 'Ivanova', 'ritaivanova@gmail.com', '+7342835685479374'),
    new User(5, 'Petya', 'Ivanov', 'petyaivanov@gmail.com', '+4545243630189374'),
    new User(6, 'Dima', 'Ivanov', 'dimaivanov@gmail.com', '+0965283630189374'),
    new User(7, 'Sergei', 'Ivanov', 'sergeiivanov@gmail.com', '+546563630189374'),
    new User(8, 'Illya', 'Ivanov', 'illyaivanov@gmail.com', '+8745463630189374'),
    new User(9, 'Marta', 'Ivanova', 'martaivanova@gmail.com', '+70353630189374'),
    new User(10, 'David', 'Ivanov', 'davidivanova@gmail.com', '+09383630189374'),
];

const filterUsers = users.filter((user) => user.id %2 === 0);
console.log(filterUsers);
