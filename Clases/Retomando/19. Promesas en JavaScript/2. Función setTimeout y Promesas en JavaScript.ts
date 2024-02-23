let miPromesa = new Promise((resolved, rejected) => {
  let expresion = true;
  if (expresion) {
    resolved("Se resolvio correctamente");
  } else {
    rejected("Se produjo un error");
  }
});

let promesa = new Promise((resuelto) => {
  console.log("inicio de la promesa");

  setTimeout(() => resuelto("promesa + timeout"), 3000);

  console.log("fin de la promesa");
});

promesa.then((valor) => console.log(valor));
