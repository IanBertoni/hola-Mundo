// Aquí definimos los atributos de la instancia y les asignamos valores.
// los getters y setter no pueden tener el mismo nombre que se usa en el constructor, por esto se usa un "_" antes del nombre en el constructor
class Persona {
  constructor(private nombre: string, private apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  //Los Getters sirven para leer la informacion de este atributo por ejemplo
  // Getter para el nombre
  getNombre(): string {
    return this.nombre;
  }

  // Getter para el apellido
  getApellido(): string {
    return this.apellido;
  }

  //Los Setters para modificar el valor de este atributo
  // Setter para el nombre
  setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  // Setter para el apellido
  setApellido(nuevoApellido: string): void {
    this.apellido = nuevoApellido;
  }
}

let persona1 = new Persona("Markitos", "Bertoni");
persona1.setNombre("Marcoño");
console.log(persona1);
console.log(persona1.getNombre());
persona1.setNombre("Juan");
console.log(persona1.getNombre());
console.log(typeof persona1.setNombre);

/*
public: Los miembros marcados como public son accesibles desde cualquier lugar, tanto dentro como fuera de la clase.
private: Los miembros marcados como private solo son accesibles dentro de la misma clase en la que están declarados. No se pueden acceder desde fuera de la clase ni desde clases heredadas.
protected: Los miembros marcados como protected son accesibles dentro de la misma clase y también por clases derivadas (heredadas). 
*/
