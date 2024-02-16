import { log } from "console";

class Persona {
  static contadorObjetosPersona = 0; // atributo de nuestra clase. (Atributo Estatico)

  //Agregar atributos sin declararlo en el constructor
  email: string = `${this.nombre}${this.apellido}@hotmail.com`; // atributo de nuestros objetos (Atributo No estaticos)

  constructor(protected nombre: string, protected apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    // las clases estaticas no se acceden con "this." ya que tenemos que utilizar el nombre de la Clase
    //cada vez que se llama al constructor al final se le suma 1 al contador.
    Persona.contadorObjetosPersona++;
    console.log(`Usuarios Registrados: ${Persona.contadorObjetosPersona} `);
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
    return `${this.nombre} ${this.apellido}`;
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
let persona2 = new Empleado("Mark", "Skousen", "221 Baker ST");
let persona3 = new Empleado("Mark", "Skousen", "221 Baker ST");
let persona4 = new Empleado("Mark", "Skousen", "221 Baker ST");
let persona5 = new Empleado("Mark", "Skousen", "221 Baker ST");
// console.log(persona1.saludar()); persona1.saludar is not a function
//no es posible llamar a un metodo static desde un objeto, pero si desde la clase
// los metodos estaticos se asocian con las clases y no con los objetos
Persona.saludar(); // output: "Saludando desde el metodo static"
Persona.saludar2(persona1); // output: 'Hola Markitos Bertoni'

//Ahora probando con la clase hija "Empleado"
Empleado.saludar(); //output: 'Saludando desde el metodo static'
Empleado.saludar2(persona2); //output: 'Hola Mark Skousen'
// los metodos estaticos se asocia solo a la clase no al objeto.
console.log(Persona.contadorObjetosPersona);
// las clases hijas tambien heredan los metodos estaticos
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(persona2.email);
// console.log(Persona.email); // Output: undefined
// Esto muestra que no se puede acceder desde la clase al atributo Email ya que este no es estatico
