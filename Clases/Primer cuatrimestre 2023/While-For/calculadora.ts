import * as rls from 'readline-sync';

while (true) {
    let primerNumero: number = rls.questionFloat("Ingrese el primer numero: ");
    let segundoNumero: number = rls.questionFloat("Ingrese el segundo numero: ");

    let opcion: number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, o cualquier otra tecla para salir: ");

    if (opcion === 1) {
        let resultado: number = primerNumero + segundoNumero;
        console.log(`El resultado de la suma es: ${resultado}`);
    } else if (opcion === 2) {
        let resultado: number = primerNumero - segundoNumero;
        console.log(`El resultado de la resta es: ${resultado}`);
    } else {
        break;
    }
}
