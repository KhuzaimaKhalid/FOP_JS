const person ={
    name: "Alice",
    age: 30,
    hobbies : ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "Wonderland",
        country: "Fictionland"
    }
}
console.log(person.name);
console.log(person.address)
console.log(person.hobbies[1]);
console.log(person.address.city);

class person1{
    constructor(name, age, hobbies, address){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const p1 = new person1("Bob", 25, ["gaming", "hiking"], ["456 Side St", "Adventureland", "Imaginaryland"]);
console.log(p1.name);
console.log(p1.address);
console.log(p1.hobbies[0]);
console.log(p1.address.country);