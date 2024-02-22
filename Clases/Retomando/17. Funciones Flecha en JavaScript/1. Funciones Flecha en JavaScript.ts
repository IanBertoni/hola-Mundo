function mifunc(a, b) {
  console.log(a + b);
}

mifunc(1, 2);

//esto es una funcion anonima, ya que a esta no se le asigna nombre, sino que la funcion se la asigna a una variable
let miFuncion = function () {
  console.log("Saludos desde la funcion");
};

miFuncion();
console.log(typeof miFuncion);
// en el output vemos como a pesar que la funcion anonima se le asigna a una variable, cuando usamos typeof nos dice que es una function.

// se crea la variable, luego usamos los parentesis donde irian nuestros argumentos, y luegos la flecha "=>" y por ultimo abrimos llaves.

const miFuncionFlecha = () => {
  console.log("Esto es una funcion flecha");
};

//Las funciones flechas no aceptan el hoisting, esto es que podemos llamar a la funcion antes de crearla.
// con funciones normales si se puede, pero con la funcion flecha no.
