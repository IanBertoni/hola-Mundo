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
    super(nombre, sueldo); // con "super" se llama al constructor de la clase padre(Empleado)
    this.departamento = departamento;
  }
  //sobreescritura obtenerInfo para que aparezca el departamento
  obtenerInfo() {
    return `${super.obtenerInfo()} Departamento: ${this.departamento}`;
    //Con super llamamos a la funcion de la clase padre, y sobreescrimos con la info que querramos agregar.
  }
}

let gerente1 = new Gerente("Ian", 2400, "Programacion");

console.log(gerente1.obtenerInfo());
// aca el ouput de como reutilizamos una funcion sobreescribiendola.
