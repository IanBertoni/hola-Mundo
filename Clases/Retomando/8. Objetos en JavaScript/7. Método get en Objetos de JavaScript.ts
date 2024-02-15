let persona: any = {
  nombre: "Ian",
  apellido: "Bertoni",
  email: "ianbertoni@hotmail.com",
  edad: 23,
  get nombreCompleto() {
    return this.nombre + " " + this.apellido; //*
  },
};

// cuando usamos get, simplificamos la sintaxis y no hace falta usar los parentesis para indicar que es una funcion.
console.log(persona.nombreCompleto);
