"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
// Definimos la clave correcta
var claveCorrecta = "eureka";
// Definimos la cantidad de intentos permitidos
var intentosPermitidos = 3;
// Variable para llevar el conteo de intentos realizados
var intentosRealizados = 0;
// Bucle mientras tengamos intentos disponibles
while (intentosRealizados < intentosPermitidos) {
    // Pedimos al usuario que ingrese la clave
    var claveIngresada = readlineSync.question("Ingrese la clave: ");
    // Verificamos si la clave ingresada es la correcta
    if (claveIngresada === claveCorrecta) {
        console.log("¡Clave correcta! Acceso permitido.");
        // Salimos del bucle
        break;
    }
    else {
        intentosRealizados++;
        // Verificamos si se agotaron los intentos disponibles
        if (intentosRealizados === intentosPermitidos) {
            console.log("Has agotado todas las oportunidades. Acceso denegado.");
        }
        else {
            console.log("Clave incorrecta. Te quedan ".concat(intentosPermitidos - intentosRealizados, " intentos."));
        }
    }
}
