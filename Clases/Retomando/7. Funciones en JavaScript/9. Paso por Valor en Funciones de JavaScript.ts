// Paso por valor se aplica cuando usamos tipos que no son objetos.
// En este ejemplo, 'x' es una variable con un valor primitivo.

let x = 10; // valor primitivo, porque no tiene atributos ni métodos asignados.

// Esta función intenta cambiar el valor de 'a', pero dado que JavaScript pasa los argumentos por valor,
// el cambio solo se refleja dentro de la función y no afecta a 'x' fuera de ella.
function cambiarValor(a) {
  a = 20;
  return;
}

// Al llamar a la función, 'x' se pasa como argumento y se copia su valor en 'a'.
// Sin embargo, cualquier cambio realizado dentro de la función solo afecta a 'a', no a 'x'.
cambiarValor(x); // 10
console.log(x); // 10
// console.log(a); // a is not defined
