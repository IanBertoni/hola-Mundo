import * as rls from 'readline-sync';

let num:number = 0;
let limite:number = 0;

// Este ciclo while valida que el usuario ingrese un número entero positivo para la variable num.
while (num <= 0) {
    num = rls.questionInt('Por favor ingrese un número entero positivo: ');
}

// Este ciclo while valida que el usuario ingrese un número entero positivo para la variable limite.
while (limite <= 0) {
    limite = rls.questionInt('Por favor ingrese un número entero positivo: ');
}

// Este ciclo for imprime la tabla de multiplicación del número ingresado por el usuario hasta el limite ya definido.
for (let i:number = 1; i <= limite; i++) {
    const resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}

// Se ingresa un número entero positivo y un límite, se valida que ambos sean positivos, y se imprime la tabla de multiplicación del número ingresado hasta el límite especificado.