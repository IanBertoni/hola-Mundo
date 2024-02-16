import { log } from "console";

class Persona {
  constructor(protected nombre: string, protected apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombre(): string {
    return this.nombre;
  }

  getApellido(): string {
    return this.apellido;
  }

  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  setApellido(nuevoApellido: string): void {
    this.apellido = nuevoApellido;
  }
  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

class Empleado extends Persona {
  private departamento: string;

  constructor(nombre: string, apellido: string, departamento: string) {
    super(nombre, apellido); // llamar al constructor de la clase padre, tambien se hereda los get y set
    this.departamento = departamento;
  }

  getDepartamento(): string {
    return this.departamento;
  }

  setDepartamento(nuevoDepartamento: string): void {
    this.departamento = nuevoDepartamento;
  }
}

let persona1 = new Persona("Markitos", "Bertoni");
let persona2 = new Empleado("Mark", "Skousen", "221 Baker ST");
console.log(persona1);
console.log(persona2);
console.log(persona2.getDepartamento());
console.log(persona2.getNombre());
console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto()); //<---﹁
// este metodo no esta dentro de "empleado" pero lo hereda de "Persona"
