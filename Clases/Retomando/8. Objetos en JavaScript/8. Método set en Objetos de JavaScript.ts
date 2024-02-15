let persona: any = {
  nombre: "Ian",
  apellido: "Bertoni",
  email: "ianbertoni@hotmail.com",
  edad: 23,
  idioma: "es_ar", //*1
  get lang() {
    return this.idioma.toUpperCase(); //*2
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido; //*
  },
};

// cuando usamos get, simplificamos la sintaxis y no hace falta usar los parentesis para indicar que es una funcion.
console.log(persona.nombreCompleto);

//*1 cuando se almacena los idiomas, se hace en mayuscula, y despues del "_" se agrega la variable del pais si es necesario.
//2 Cuando usamos la funcion .toUpperCase vuelve el string en su totalidad en mayuscula.
console.log(persona.lang); //output "ES_AR"

persona.lang = "en";

// lang llama al metodo get, y este metodo lo convierte en mayuscula pero no sabemos si se almaceno como queremos(en mayus)
console.log(persona.lang); //output "EN"
//cuando llamamos a "idioma" nos aseguramos que se guardo correctamente
console.log(persona.idioma);
