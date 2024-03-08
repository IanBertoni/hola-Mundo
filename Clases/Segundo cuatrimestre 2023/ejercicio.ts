// transformar string a number

let miNumero = "17";

let edad = Number(miNumero);

let resultado =
  edad >= 18 ? "Tiene edad para votar" : "Edad insuficiente para votar";

console.log(resultado);
/*
Ver si es NaN en js
*/
let miNumero2 = "18x";

let edad2 = Number(miNumero);

if (isNaN(edad2)) {
  console.log("no es un numero");
} else {
  if (edad2 >= 18) {
    console.log("Puede votar");
  } else {
    console.log("es menor no puede votar");
  }
}
