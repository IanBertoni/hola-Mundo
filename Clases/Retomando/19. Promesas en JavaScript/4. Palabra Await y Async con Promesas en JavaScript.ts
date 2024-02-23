//async y await
// await solo se puede usar cuando la funcion tiene la palabra reservada async
async function funcionConPromesaYAwait() {
  let miPromesa = new Promise((resolver) => {
    resolver("promesa con await");
  });
  console.log(await miPromesa);
}

funcionConPromesaYAwait();
