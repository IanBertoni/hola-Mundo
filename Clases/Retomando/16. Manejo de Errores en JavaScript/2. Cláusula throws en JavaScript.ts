/* "use strict";
let resultado = "";
try {
  if (isNaN(resultado)) throw "No es un numero";
  else if (resultado === "") throw "es una cadena vacia";
  else if (resultado >= 0) throw "valor positivo";
  else if (resultado < 0) throw "valor negativo";
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("termino la revision");
}
pongo todo entre comentarios porque me molesta el rojo de que algo esta fallando con el codigo, sacar los "/*" y probar los distintos throws.
*/
