let nombrePropiedad: string;

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

// concatenar cada valor de cada propiedad.
console.log(persona.nombre + ", " + persona.apellido);

// for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}
// con la palabra reservada Object.values para entrar a los valores sin que nos muestre las propiedades.
let personaArray = Object.values(persona);
console.log(personaArray);

// La función JSON.stringify() convierte el objeto persona en un string.
let personaString = JSON.stringify(persona);

console.log(typeof personaString);
console.log(typeof persona);
