// Definición de la clase Persona
class Persona {
  // Constructor que recibe nombre y apellido
  constructor(protected nombre: string, protected apellido: string) {
    this.nombre = nombre; // Inicializa el atributo nombre
    this.apellido = apellido; // Inicializa el atributo apellido
  }

  // Método para obtener el nombre de la persona
  getNombre(): string {
    return this.nombre; // Retorna el nombre
  }

  // Método para obtener el apellido de la persona
  getApellido(): string {
    return this.apellido; // Retorna el apellido
  }

  // Método para establecer un nuevo nombre
  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre; // Asigna un nuevo valor al nombre
  }

  // Método para establecer un nuevo apellido
  setApellido(nuevoApellido: string): void {
    this.apellido = nuevoApellido; // Asigna un nuevo valor al apellido
  }

  // Método para obtener el nombre completo de la persona
  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`; // Retorna el nombre completo
  }

  // Método toString que devuelve una representación del objeto como cadena de texto
  //sobreescribiendo el metodo de la clase padre (object)
  toString() {
    //se aplcica polimorfismo en esta call
    return `${this.nombreCompleto()}`; // Retorna el nombre completo
  }
  // Método toString que muestra el nombre completo del empleado.
  // Esto se llama polimorfismo porque la función nombreCompleto()
  // puede comportarse de manera diferente en la clase Empleado.
  // es decir que en la clase padre el codigo no va a mostrar el depto, pero si lo hace en la clase hija.
}

// Definición de la clase Empleado que extiende de Persona
class Empleado extends Persona {
  // Atributo específico de Empleado
  private departamento: string;

  // Constructor que recibe nombre, apellido y departamento
  constructor(nombre: string, apellido: string, departamento: string) {
    super(nombre, apellido); // Llama al constructor de la clase padre (Persona)
    this.departamento = departamento; // Inicializa el atributo departamento
  }

  // Método para obtener el departamento del empleado
  getDepartamento(): string {
    return this.departamento; // Retorna el departamento
  }

  // Método para establecer un nuevo departamento
  setDepartamento(nuevoDepartamento: string): void {
    this.departamento = nuevoDepartamento; // Asigna un nuevo valor al departamento
  }

  // Sobreescritura del método nombreCompleto de Persona
  nombreCompleto() {
    return ` ${super.nombreCompleto()} ${this.departamento}`; // Retorna el nombre completo + departamento
  }
}

// Creación de instancias
let persona1 = new Persona("Markitos", "Bertoni");
let persona2 = new Empleado("Mark", "Skousen", "221 Baker ST");

console.log(persona1.toString());
console.log(persona2);
console.log(persona2.getDepartamento());
console.log(persona2.getNombre());
console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());
console.log(persona2.toString());
/*
    Explicación:

    La clase Persona representa una entidad genérica de persona con nombre y apellido.
    La clase Empleado extiende la clase Persona y agrega un atributo adicional para el departamento.
    Los métodos getNombre, getApellido, setNombre y setApellido permiten obtener y establecer los valores de los atributos nombre y apellido.
    El método nombreCompleto devuelve una cadena que representa el nombre completo de la persona o empleado.
    La sobreescritura del método nombreCompleto en la clase Empleado agrega el departamento al nombre completo.
    La clase Empleado hereda el método toString de la clase Persona, que devuelve una representación de cadena del nombre completo.
    Se crean instancias de las clases Persona y Empleado y se imprime información sobre ellas en la consola.

*/
