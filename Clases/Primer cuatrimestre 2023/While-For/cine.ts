import * as rls from 'readline-sync';

// hago un arreglo doble de butacas
let butacas: boolean[][] = [];

// Pido al usuario que ingrese el numero de filas y columnas
let filas = rls.questionInt("Ingrese el numero de filas: ");
let columnas = rls.questionInt("Ingrese el numero de columnas: ");

// Inicializo el arreglo de butacas con todas desocupadas (false)
for (let i = 0; i < filas; i++) {
  butacas.push([]); // Agrego una nueva fila vacía
  for (let j = 0; j < columnas; j++) {
    butacas[i][j] = false; // Asigno el valor false a cada butaca
  }
}

// Pido al usuario que ingrese el numero de butacas ocupadas
let butacasOcupadas = rls.questionInt("Indique el numero de butacas ocupadas: ");

// pido al usuario que ingrese la posición de cada butaca ocupada
for (let i = 0; i < butacasOcupadas; i++) {
  let fila = rls.questionInt(`Ingrese la fila de la butaca ${i+1}: `);
  let columna = rls.questionInt(`Ingrese la columna de la butaca ${i+1}: `);
  butacas[fila][columna] = true; // asignamos el valor true a la butaca ocupada
}

// Contamos el numero de butacas desocupadas
let butacasDesocupadas = 0;
for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    if (!butacas[i][j]) {
      butacasDesocupadas++;
    }
  }
}

// se muestra el resultado al usuario
console.log(`Hay ${butacasDesocupadas} butacas desocupadas en la sala.`);
