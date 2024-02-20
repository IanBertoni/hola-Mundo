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
    public departamento: string
  ) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerInfo() {
    return `${super.obtenerInfo()} Departamento: ${this.departamento}`;
  }
}

function imprimir(tipo: any) {
  console.log(tipo.obtenerInfo()); // Imprime la información del objeto pasado como argumento
  if (tipo instanceof Gerente) {
    // Verifica si el objeto es una instancia de la clase Gerente
    console.log("Es un objeto de tipo gerente");
    console.log(tipo.departamento);
  } else if (tipo instanceof Empleado) {
    // Verifica si el objeto es una instancia de la clase Empleado
    console.log("es un objeto de tipo empleado");
  } else if (tipo instanceof Object) {
    // Verifica si el objeto es una instancia de la clase Object (la clase base de todas las clases en JavaScript/TypeScript)
    console.log("es un objeto");
  }
}

let empleado1 = new Empleado("Markinhos", 2500); // Crea un objeto de tipo Empleado
let gerente1 = new Gerente("Ian", 2400, "Programacion"); // Crea un objeto de tipo Gerente

imprimir(empleado1); // Llama a la función imprimir pasando el objeto empleado1
imprimir(gerente1); // Llama a la función imprimir pasando el objeto gerente1

/* 
Las condiciones de uso de instanceof son las siguientes:
Operador Binario: instanceof es un operador binario, lo que significa que se utiliza entre dos operandos: un objeto y una función constructora.

Verifica la Herencia: instanceof verifica si un objeto es una instancia de una clase específica o de una clase que hereda de esa clase.

Sintaxis: La sintaxis básica es objeto instanceof Clase, donde objeto es el objeto que se está evaluando y Clase es la función constructora o el nombre de la clase contra la cual se está haciendo la comparación.

Retorno: Devuelve true si el objeto es una instancia de la clase especificada o de alguna clase que hereda de esa clase; de lo contrario, devuelve false.

Cuidado con Primitivos: instanceof no funciona con valores primitivos como strings, números, booleanos, etc., ya que estos no son objetos. Sin embargo, se puede envolver un valor primitivo en su tipo de objeto correspondiente (por ejemplo, new String("hello")) para realizar la comprobación.

Herencia y Prototipos: instanceof tiene en cuenta la cadena de prototipos del objeto para determinar si es una instancia de la clase o una clase que hereda de ella. Esto significa que si un objeto está heredando de otra clase, instanceof seguirá devolviendo true si se evalúa con la clase padre o cualquier clase de la jerarquía de herencia.

*/
