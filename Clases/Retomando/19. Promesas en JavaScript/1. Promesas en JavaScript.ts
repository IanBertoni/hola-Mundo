// en una promesa se usan funciones de tipo callback, y esta tiene varios estados.
//hay 2 caminos en una promesa, uno donde se ejecuto todo correctamente y otro donde haya habido un error.
//cuando la promesa no haya terminado de correr el codigo se encuentra en "pending"
//y una vez que se haya terminado hay 2 resultados, resolved ".then()" o rejected ".catch()"
let miPromesa = new Promise((resolved, rejected) => {
  let expresion = true;
  if (expresion) {
    resolved("Se resolvio correctamente");
  } else {
    rejected("Se produjo un error");
  }
});

// miPromesa.then(
//   (valor) => console.log(valor),
//   (error) => console.log(error)
// );

miPromesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

//.then() maneja el caso de éxito (resolución) de la promesa, mientras que .catch() maneja el caso de error (rechazo) de la promesa. Esto permite que tu código maneje de manera efectiva tanto el éxito como el fracaso de una operación asincrónica de forma clara y concisa.
