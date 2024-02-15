//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

//con .prototype se puede agregar una propiedad fuera del objeto.
//ademas de poder agregarle un valor por default.
//usando prototype podemos modificar los atributos y los metodos asociados al objeto
Persona.prototype.telefono = 44332211;
let padre = new Persona("Ian", "Bertoni", "ianbertoni@hotmail.com");
padre.telefono = 4321234;
console.log(padre.telefono);

let madre = new Persona("Fulanita", "Fulanata", "ianbertonisk@gmail.com");
madre.telefono = 2313544;
console.log(madre.telefono);
