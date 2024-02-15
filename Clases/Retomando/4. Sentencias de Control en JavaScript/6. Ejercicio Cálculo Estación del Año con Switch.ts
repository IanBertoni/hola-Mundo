import * as rls from "readline-sync";
let estacion: string = "Estacion desconocida";
let mes: number = rls.questionInt(
  "Indique el numero del mes y se le brindara la estacion correspondiente: "
);

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Verano";
    break;

  case 3:
  case 4:
  case 5:
    estacion = "Otoño";
    break;

  case 6:
  case 7:
  case 8:
    estacion = "invierno";

    break;

  case 9:
  case 10:
  case 11:
    estacion = "primavera";

    break;

  default:
    estacion = "Ingrese los numeros entre 1 y 12 por favor.";
}

console.log(estacion);
