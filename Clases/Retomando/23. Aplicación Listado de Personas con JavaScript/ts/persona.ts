class Persona {
  constructor(public nombre: string, public apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(apellido: string) {
    this.apellido = apellido;
  }
}
