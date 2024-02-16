class Persona {
  static contadorPersona = 0;
  protected idPersona: number = 0;

  static get MAX_OBJ() {
    return 5;
  }

  constructor(protected nombre: string, protected apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    if (Persona.contadorPersona < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersona;
    } else {
      console.log("Llegaste al limite de cuentas creadas");
    }
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

  static saludar() {
    console.log("Saludando desde el metodo static");
  }

  static saludar2(persona: Persona) {
    console.log(`Hola ${persona.nombre} ${persona.apellido}`);
  }

  nombreCompleto() {
    return `${this.idPersona}: ${this.nombre} ${this.apellido}`;
  }

  toString() {
    return `${this.nombreCompleto()}`;
  }
}

class Empleado extends Persona {
  private departamento: string;
  constructor(nombre: string, apellido: string, departamento: string) {
    super(nombre, apellido);
    this.departamento = departamento;
  }

  getDepartamento(): string {
    return this.departamento;
  }

  setDepartamento(nuevoDepartamento: string): void {
    this.departamento = nuevoDepartamento;
  }

  nombreCompleto() {
    return ` ${super.nombreCompleto()} ${this.departamento}`;
  }
}

let persona1 = new Persona("Markitos", "Bertoni");

console.log(persona1.toString());

let persona2 = new Empleado("Mark", "Skousen", "Departamento");

console.log(persona2.toString());
let persona3 = new Persona("Lebron", "James");

console.log(persona3.toString());
let persona4 = new Persona("Magic", "Jonhson");

console.log(persona4.toString());
let persona5 = new Persona("Michael ", "Jordan");

console.log(persona5.toString());
let persona6 = new Persona("Steph", "Curry");

console.log(persona6.toString());
