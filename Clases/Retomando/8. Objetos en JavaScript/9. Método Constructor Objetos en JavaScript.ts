//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}

let padre = new Persona("Ian", "Bertoni", "ianbertoni@hotmail.com");

console.log(padre);

let madre = new Persona("Fulanita", "Fulanata", "ianbertonisk@gmail.com");

console.log(madre);

padre.nombre = "Carlos";
padre.apellido = "Menini";
console.log(padre);
