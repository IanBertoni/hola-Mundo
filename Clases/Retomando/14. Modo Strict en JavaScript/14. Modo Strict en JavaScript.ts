"use strict"; // el metodo strict hace que sino definimos la variable, no "existe"
// cuando usemos "use strict" se pone en la primer linea, o adentro de alguna funcion
/*
x = 10;
console.log(x); // output: x is not defined

aca podemos ver que nos dice el output que x is not defined

pero si usamos let, var o const, vemos que funciona
*/
let z = 145;
console.log(z);
// y aca vemos como si funciona
// esto se aplica en funciones tambien cuando no declaramos la variable.
miFuncion();

function miFuncion() {
  "use strict";
  let y = 15;
  console.log(y);
}
