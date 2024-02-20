class Empleado {
  constructor(protected nombre: string, protected sueldo: number) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerInfo() {
    return `Nombre: ${this.nombre} Sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(
    protected nombre: string,
    protected sueldo: number,
    protected departamento: string
  ) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerInfo() {
    return `${super.obtenerInfo()} Departamento: ${this.departamento}`;
  }
}

function imprimir(tipo: any) {
  console.log(tipo.obtenerInfo()); // con una linea de codigo se reeutiliza el codigo dependiendo de que clase la llame.
}

let empleado1 = new Empleado("Markinhos", 2500);
let gerente1 = new Gerente("Ian", 2400, "Programacion");

imprimir(empleado1); // output: Nombre: Markinhos Sueldo: 2500
imprimir(gerente1); // output: Nombre: Ian Sueldo: 2400 Departamento: Programacion
//Entonces polimorfismo es reutilizar un codigo de distinta manera, en este caso reutilizamos una funcion
