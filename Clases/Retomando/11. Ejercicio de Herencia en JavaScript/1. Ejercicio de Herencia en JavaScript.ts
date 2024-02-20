class Persona {
  static contadorPersona = 0;
  protected idPersona: number = 0;

  constructor(
    protected nombre: string,
    protected apellido: string,
    protected edad: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.idPersona = ++Persona.contadorPersona;
  }
  getIdPersona(): number {
    return this.idPersona;
  }
  getNombre(): string {
    return this.nombre;
  }
  getApellido(): string {
    return this.apellido;
  }

  getAge(): number {
    return this.edad;
  }
  setNuevoNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  setNuevoApellido(nuevoApellido: string): void {
    this.apellido = nuevoApellido;
  }

  setNewAge(age: number): void {
    this.edad = age;
  }

  ToString(): string {
    return `
    ID: ${this.idPersona}
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Edad: ${this.edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados: number = 0;
  private idEmpleado: number = 0;
  private sueldo: number = 0;
  constructor(nombre: string, apellido: string, edad: number) {
    super(nombre, apellido, edad);
    this.idEmpleado = ++Empleado.contadorEmpleados;
  }

  getIdEmpleados(): number {
    return this.idEmpleado;
  }

  getSueldo(): number {
    return this.sueldo;
  }

  setSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  toString(): string {
    return `${super.ToString()} ${this.idEmpleado} ${this.sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorClientes: number = 0;
  idCliente: number = 0;
  protected fechaRegistro: Date;
  constructor(nombre: string, apellido: string, edad: number) {
    super(nombre, apellido, edad);
    this.idCliente = ++Cliente.contadorClientes;
    this.fechaRegistro = new Date();
  }
  getIdCliente(): number {
    return this.idCliente;
  }

  getFechaRegistro(): Date {
    return this.fechaRegistro;
  }

  setFechaRegistro(fecha: Date): void {
    this.fechaRegistro = fecha;
  }

  toString(): string {
    return `
    ${super.ToString()}
    ID Cliente ${this.idCliente}
    El cliente se registro el ${this.fechaRegistro}
    `;
  }
}

let persona = new Persona("Ian", "Bertoni", 23);
let empleado = new Empleado("Ragnar", "Skousen", 32);
let cliente = new Cliente("Ivo", "Francisco", 18);

console.log(persona);
console.log(persona.getIdPersona());
empleado.setSueldo(2500);
console.log(empleado);

console.log(empleado.getSueldo());
console.log(cliente);
console.log(cliente.getFechaRegistro());
console.log(empleado.toString());
