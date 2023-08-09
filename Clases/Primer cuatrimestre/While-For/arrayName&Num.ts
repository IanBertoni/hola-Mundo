import readlineSync from 'readline-sync';

// Declaración de variables
const arregloNombres: string[] = new Array(2);
const arregloNumeros: number[] = new Array(3);

// Ingreso de datos por el usuario
for (let i = 0; i < arregloNombres.length; i++) {
  arregloNombres[i] = readlineSync.question(`Ingrese el nombre ${i+1}: `);
}

for (let i = 0; i < arregloNumeros.length; i++) {
  arregloNumeros[i] = readlineSync.questionInt(`Ingrese el número ${i+1}: `);
}

// Impresión de los datos ingresados
console.log(`Los nombres ingresados son: ${arregloNombres[0]} y ${arregloNombres[1]}`);
console.log(`Los números ingresados son: ${arregloNumeros[0]}, ${arregloNumeros[1]} y ${arregloNumeros[2]}`);
