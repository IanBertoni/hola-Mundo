import { log } from "console";
import { removeListener } from "process";

let persona: any = {
  nombre: "Ian",
  apellido: "Bertoni",
  email: "ianbertoni@hotmail.com",
  edad: 23,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido; //*
  },
};

// se usa el nombre del objeto + . + la propiedad que queremos agregar de manera dinamica
persona.telefono = 42131231;

console.log(persona.edad);
console.log(persona.telefono);

// usando la palabra reservada "Delete" + el objeto y la propiedad, se borra la propiedad que querramos.
delete persona.telefono;

console.log(persona);
