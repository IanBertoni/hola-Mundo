let persona = {
  nombre: "Ian",
  apellido: "Bertoni",
  email: "ianbertoni@hotmail.com",
  edad: 23,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido; //*
  },
};

console.log(persona.nombre);
// usamos los corchetes y dentro ponemos la propiedad que queremos ver
console.log(persona["apellido"]);

let nombrePropiedad: string;

// for in
for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}
