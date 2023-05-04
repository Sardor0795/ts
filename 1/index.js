"use strict";
// TS from Microsoft company
class Person {
    constructor(name, surname, age) {
        (this.name = name), (this.surname = surname), (this.age = age);
    }
}
let user = new Person("Jon", "Dale", 20);
console.log(user);
