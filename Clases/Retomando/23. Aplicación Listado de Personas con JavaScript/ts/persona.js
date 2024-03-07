class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    this._nombre = nombre;
  }

  getApellido() {
    return this._apellido;
  }

  setApellido(apellido) {
    this._apellido = apellido;
  }
}
