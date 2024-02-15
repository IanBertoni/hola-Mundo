//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

let padre = new Persona("Ian", "Bertoni", "ianbertoni@hotmail.com");

console.log(padre.nombreCompleto());

let madre = new Persona("Fulanita", "Fulanata", "ianbertonisk@gmail.com");

console.log(madre.nombreCompleto());
