// promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeOut() {
  console.log("Inicio de la funcion");
  let mipromesa = new Promise((resolver) => {
    setTimeout(() => resolver("promesa con await y timeout"), 3000);
  });

  console.log(await mipromesa);
  console.log("Fin de la funcion");
}

funcionConPromesaAwaitTimeOut();
