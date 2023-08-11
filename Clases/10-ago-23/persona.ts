import * as rls from "readline-sync"
class Person {
    private name: string;
    private age: number;

    constructor() {
        this.name = rls.question("Ingrese su nombre: ");
        this.age = rls.questionInt("Ingrese su edad: ");
    }

    getInfo() {
        console.log(`Nombre: ${this.name}`);
        console.log(`Edad: ${this.age}`);
    }
}

const person = new Person();
person.getInfo();