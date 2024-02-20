"use strict";
// usamos el modo estricto asi cuando no declaramos una variable nos de un error.
try {
  let x = 12; // nos da error en quokka sino usamos let.
  //miFuncion();  lo mismo pasa cuando no declaramos la funcion, pero vemos como el programa sigue funcionando.
  // pero existen muchos mas errores en los que podemos utilizar este metodo para que en caso que haya un error, el programa no deje de funcionar.
} catch (error) {
  console.log(error); //output: ReferenceError: x is not defined.
} finally {
  // finally siempre se va a ejecutar, independientemente de que try tire un error o no.
  console.log("termina la revision de errores");
}
//cabe aclarar que al final de try/catch no es obligatorio poner finally, esto es opcional dependiendo de lo que precisemos en nuestro codigo.
let y = 23;
// antes del try catch, al no definir la x/miFuncion, el resto del programa no funciona,pero al utilizar esto vemos como el output de y, nos da el resultado que deberia de dar
console.log(y);
