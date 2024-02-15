let persona = {
  nombre: "Ian",
  apellido: "Bertoni",
  email: "ianbertoni@hotmail.com",
  edad: 23,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido; //*
  },
};
// * cuando queres llamar a una propiedad dentro del objeto no se usa (por ej) el "persona.nombre", se usa el this

//asi se llama a la funcion que creamos arriba, no olvidarse usar los () cuando llamamos a las funciones.
console.log(persona.nombreCompleto());
