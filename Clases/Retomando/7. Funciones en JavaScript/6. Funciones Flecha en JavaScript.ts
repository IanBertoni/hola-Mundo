//Declaracion Funcion de tipo Expresion
let sumar = function (a, b) {
  return a + b;
};

let resultado = sumar(1, 2);

console.log(resultado);

console.log(typeof sumar);

//Es lo mismo que la funcion "Sumar" pero en una funcion flecha

const sumarFuncionTipoFlecha = (a, b) => a + b;

console.log(sumarFuncionTipoFlecha(2, 4));
