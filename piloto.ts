import { questionInt } from 'readline-sync';

// Pedir al usuario el tiempo de cada vuelta
const tiempoVuelta1: number = questionInt("Ingresa el tiempo de la primera vuelta en segundos:");
const tiempoVuelta2: number = questionInt("Ingresa el tiempo de la segunda vuelta en segundos:");
const tiempoVuelta3: number = questionInt("Ingresa el tiempo de la tercera vuelta en segundos:");
const tiempoVuelta4: number = questionInt("Ingresa el tiempo de la cuarta vuelta en segundos:");

// Calcular el tiempo total y el promedio de vuelta
const tiempoTotal: number = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
const promedioVuelta: number = tiempoTotal / 4;

// Mostrar los resultados al usuario
console.log("El tiempo total es: " + tiempoTotal + " segundos");
console.log("El promedio de vuelta es: " + promedioVuelta + " segundos");



// descuento 

let precioFinal: number = 0
let precioProductoUno: number = 0
