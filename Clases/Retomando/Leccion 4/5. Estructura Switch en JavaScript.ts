import { log } from "console";

let numero: number = 1;

let numeroTexto: string = "Valor desconocido";

switch (numero) {
  case 1:
    numeroTexto = "Numero Uno";
    break;

  case 2:
    numeroTexto = "Numero Dos";
    break;

  case 3:
    numeroTexto = "Numero 3";
    break;

  case 4:
    numeroTexto = "Numero 4";
    break;

  default:
    numeroTexto = "Caso no encontrado";
    break;
}

console.log(numeroTexto);
