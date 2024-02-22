function miFuncion1() {
  console.log("funcion1");
}

function miFuncion2() {
  console.log("funcion2");
}
// las llamadas de las funciones se ejecutan de manera secuencial
miFuncion2();
miFuncion1();

//Funciones de tipo Callback

// Definición de la función "imprimir" que imprime un mensaje
function imprimir(mensaje) {
  console.log(mensaje);
}

// Definición de la función sumar que suma dos números y llama a una función callback
function sumar(a, b, funcionCallBack) {
  let resultado = a + b;
  funcionCallBack(`resultado: ${resultado}`); // Llama a la función callback con el resultado
}

// Llamada a la función sumar con los números 5 y 3, y la función imprimir como callback
sumar(5, 3, imprimir);
