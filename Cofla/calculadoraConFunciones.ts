import * as rls from 'readline-sync'

function suma(a: number, b: number) {

    let resultadoSuma = a + b;

    return resultadoSuma;
}

function resta(a: number, b: number) {

    let resultadoResta = a - b;

    return resultadoResta;
}

function multiplicar(a: number, b: number) {

    let resultadoMulti = a * b;

    return resultadoMulti;
}

function dividir(a: number, b: number) {

    let resultadoDividir = a / b;

    return resultadoDividir;
}

console.log("Pulse 1 para sumar. \nPulse 2 para restar. \nPulse 3 para multiplicar. \npulse 4 para dividir.");

let eleccion: number = rls.questionInt("Que numero va a elegir?: ");

if (eleccion === 1) {
    let num1: number = rls.questionInt("Ingrese el primer numero: ")
    let num2: number = rls.questionInt("Ingrese el segundo numero: ")
    const resultado = suma(num1, num2);
    console.log(resultado);

} else if (eleccion === 2) {
    let num1: number = rls.questionInt("Ingrese el primer numero: ")
    let num2: number = rls.questionInt("Ingrese el segundo numero: ")
    const resultado = resta(num1, num2);
    console.log(resultado);

} else if (eleccion === 3) {
    let num1: number = rls.questionInt("Ingrese el primer numero: ")
    let num2: number = rls.questionInt("Ingrese el segundo numero: ")
    const resultado = multiplicar(num1, num2);
    console.log(resultado);

} else if(eleccion === 4){
    let num1: number = rls.questionInt("Ingrese el primer numero: ")
    let num2: number = rls.questionInt("Ingrese el segundo numero: ")
    const resultado = dividir(num1, num2);
    console.log(resultado);
} else {
    console.log("Indique un numero del 1 al 4");
}