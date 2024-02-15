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

let miObjeto = new Object();
let miObjeto2 = {}; // esta sintaxis mas breve es la que se recomienda usar para crear un object.

let miCadena1 = new String(); // esta sintaxis es mas formal pero no es recomendada
let miCadena2: string = "hola"; // esta sintaxis es mas informal pero es la que se recomienda

let miNumero1 = new Number(23);
let miNumero2: number = 23; // aqui pasa lo mismo que en el ejemplo de string que se muestra arriba

let miBoolean = new Boolean(false);
let miBoolean2: boolean = false;

let myArray1 = new Array();
let myArray2: [] = []; // y asi se puede hacer con todos los tipos en js y ts.

let miFuncion1 = new Function();
let miFuncion2 = function (/*parametros*/) {}; // y asi se crea una funcion de manera simplificada
