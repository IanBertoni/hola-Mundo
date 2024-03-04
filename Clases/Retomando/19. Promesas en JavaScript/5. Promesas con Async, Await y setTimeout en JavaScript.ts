// Define una función asíncrona llamada funcionConPromesaAwaitTimeOut
async function funcionConPromesaAwaitTimeOut() {
  console.log("Inicio de la funcion"); // Imprime un mensaje indicando el inicio de la función

  // Crea una nueva promesa que se resolverá después de 3000 milisegundos (3 segundos)
  let mipromesa = new Promise((resolver) => {
    setTimeout(() => resolver("promesa con await y timeout"), 3000);
  });

  // Espera a que la promesa mipromesa se resuelva y luego imprime el resultado
  console.log(await mipromesa);

  console.log("Fin de la funcion"); // Imprime un mensaje indicando el final de la función
}

// Llama a la función funcionConPromesaAwaitTimeOut
funcionConPromesaAwaitTimeOut();
