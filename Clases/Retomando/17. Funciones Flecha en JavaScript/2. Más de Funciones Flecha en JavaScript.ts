// cuando es una sola linea como en el ejemplo, no es necesario abrir el cuerpo de nuestra funcion con las llaves
const miFuncionFlecha = () => console.log("Funcion flecha en una linea");

// const saludar = () => {
//   return "Saludando desde la funcion flecha";
// };

// una version simplificada de la funcion saludar, seria asi.
//en una funcion cuando no ponemos "return", esta se pone de manera implicita
const saludar = () => "saludando desde la funcion flecha";

console.log(saludar());

// si queremos que nos devuelva un objeto, tenemos que ponerlo entre parentesis, ya que el cuerpo de las funciones y los objetos comparten "{}"
const regresarObjeto = () => ({ nombre: "Juan", apellido: "Parente" });

console.log(regresarObjeto());

// si queremos recibir parametros

const funcionConParametros = (mensaje: string) => console.log(mensaje);

funcionConParametros("Hola bebee");

const funcionVariosParametros = (a: number, b: number) => {
  let resultado = a + b;
  return `resultado: ${resultado}`;
};

console.log(funcionVariosParametros(2, 5));
