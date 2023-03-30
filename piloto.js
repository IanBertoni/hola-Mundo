const { questionInt } = require("readline-sync");

var tiempoVuelta1 = questionInt("Ingresa el tiempo de la primera vuelta en segundos:");
var tiempoVuelta2 = questionInt("Ingresa el tiempo de la segunda vuelta en segundos:");
var tiempoVuelta3 = questionInt("Ingresa el tiempo de la tercera vuelta en segundos:");
var tiempoVuelta4 = questionInt("Ingresa el tiempo de la cuarta vuelta en segundos:");


var tiempoTotal = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
var promedioVuelta = tiempoTotal / 4;


console.log("El tiempo total es: " + tiempoTotal + " segundos");
console.log("El promedio de vuelta es: " + promedioVuelta + " segundos");
