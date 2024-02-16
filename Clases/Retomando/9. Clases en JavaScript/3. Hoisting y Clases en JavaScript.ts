/*Hoisting: En JavaScript, las declaraciones de variables y funciones se procesan antes de que se ejecute el código. Esto significa que puedes llamar a una función antes de que esté definida en tu código y JavaScript no lanzará un error. Sin embargo, ten en cuenta que solo la declaración de la función se eleva, no su asignación. Por ejemplo:
 */
saludar(); // Esto funciona bien

function saludar() {
  console.log("Hola!");
}
/*
En este ejemplo, la función saludar() se puede llamar antes de que se defina porque JavaScript "eleva" su declaración al principio del contexto de ejecución. 
*/
/*
las clases en JavaScript son una forma más conveniente y legible de crear objetos y trabajar con la herencia. Aunque JavaScript no tiene "clases" como en lenguajes de programación orientados a objetos tradicionales, a partir de ES6, introdujo la sintaxis de clase que es más familiar para los programadores que vienen de otros lenguajes.
*/
class Animal {
  constructor(private nombre: string) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un ruido.`);
  }
}

let perro = new Animal("Bobby");
perro.hablar();
console.log(perro.hablar);
/* 
la clase Animal define un constructor y un método hablar(), que pueden ser utilizados para crear nuevos objetos como perro. Las clases proporcionan una sintaxis más clara y ordenada para trabajar con objetos en JavaScript.
*/
