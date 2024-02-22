function miFuncion1() {
  console.log("funcion1");
}

function miFuncion2() {
  console.log("funcion2");
}

miFuncion2();
miFuncion1();

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(a, b, funcionCallBack) {
  let resultado = a + b;
  funcionCallBack(`resultado: ${resultado}`);
}

sumar(5, 3, imprimir);

//llamadas asincronas con uso setTimeout
function miFuncionCallback() {
  console.log("saludar despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); // se ejecuta despues de 3 segundos, ya que el argumento de tiempo esta en ms(milisegundos)

setTimeout(function () {
  console.log("Saludo asincrono 2"), 4000;
});

setTimeout(() => console.log("Saludo asincrono 3"), 1000);
