import * as rls from 'readline-sync';

const meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const mes: number = rls.questionInt("Ingrese un número de mes (1-12): ");

if (mes >= 1 && mes <= 12) {
    console.log("El mes correspondiente es:", meses[mes-1]);
} else {
    console.log("El número de mes ingresado es inválido.");
}
