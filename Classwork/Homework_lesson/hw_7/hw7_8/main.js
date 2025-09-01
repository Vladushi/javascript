class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('Anna', 20, 30),
    new Cinderella('Marry', 21, 31),
    new Cinderella('Kristy', 22, 32),
    new Cinderella('Susana', 23, 33),
    new Cinderella('Inga', 24, 34),
    new Cinderella('Elsa', 25, 35),
    new Cinderella('Bell', 26, 36),
    new Cinderella('Frida', 27, 37),
    new Cinderella('Tina', 28, 38),
    new Cinderella('Irma', 29, 39),
];
const prince = new Prince('John', 30, 39);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        prince.wife = cinderella;
    }
}
console.log(prince);
