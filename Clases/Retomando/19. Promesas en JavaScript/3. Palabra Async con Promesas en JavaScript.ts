// Creación de una promesa que se resuelve después de 3 segundos
let promesa = new Promise((resuelto) => {
  setTimeout(() => resuelto("promesa + timeout"), 3000);
});

// Definición de una función async que devuelve una promesa
async function miFuncionConPromesa() {
  // La función devuelve una cadena "Saludos con promesa y async"
  return "Saludos con promesa y async";
}

// Llamada a la función async que devuelve una promesa
miFuncionConPromesa()
  // Manejo del valor resuelto de la promesa
  .then((valor) => console.log(valor));

/* 
La función miFuncionConPromesa está marcada como async. Esto indica que la función devuelve una promesa de forma implícita. Esta promesa se resolverá con el valor retornado por la función (en este caso, la cadena "Saludos con promesa y async").

Dentro de miFuncionConPromesa, no necesitas crear manualmente una promesa y resolverla. La palabra clave async maneja todo ese trabajo por ti. Hace que la función retorne una promesa que se resuelve con el valor retornado por la función.

Cuando llamas a miFuncionConPromesa(), obtienes una promesa como resultado. Esta promesa se resuelve con la cadena "Saludos con promesa y async".

Luego, encadenas .then() para manejar el valor resuelto de la promesa. En este caso, simplemente imprimes el valor en la consola.

la palabra clave async se utiliza para definir funciones asincrónicas. Una función asincrónica es una función que opera de manera asincrónica mediante la utilización de promesas internamente. Estas funciones pueden contener puntos de pausa (como await, que usaremos más adelante) sin bloquear la ejecución del código.

Cuando marcas una función como async, estás indicando que esa función retornará una promesa. Esta promesa se resolverá con el valor que la función retorne explícitamente o se rechazará con el valor de un error lanzado dentro de la función.

El uso de async simplifica enormemente la escritura de código asincrónico y facilita su comprensión. Además, hace que el manejo de promesas sea más natural y menos propenso a errores, ya que no es necesario crear manualmente las promesas y gestionar su resolución o rechazo explícitamente.
  
  */
