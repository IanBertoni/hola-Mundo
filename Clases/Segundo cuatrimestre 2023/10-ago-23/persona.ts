import * as rls from "readline-sync";

class Person {
    private name: string;
    private año: number;

    constructor() {
        this.name = rls.question("Ingrese su nombre: ");
        this.año = rls.questionInt("Ingrese su año de nacimiento: ");
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.año;
        return age;
    }

    getInfo() {
        console.log(`Nombre: ${this.name}`);
        console.log(`Edad: ${this.getAge()} años`);
    }
}

const person = new Person();
person.getInfo();