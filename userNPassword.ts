import * as readlineSync from 'readline-sync';

// Definimos la clave correcta
const claveCorrecta = "eureka";

// Definimos la cantidad de intentos permitidos
const intentosPermitidos = 3;

// Variable para llevar el conteo de intentos realizados
let intentosRealizados = 0;

// Bucle mientras tengamos intentos disponibles
while (intentosRealizados < intentosPermitidos) {
  // Pedimos al usuario que ingrese la clave
  const claveIngresada = readlineSync.question("Ingrese la clave: ");

  // Verificamos si la clave ingresada es la correcta
  if (claveIngresada === claveCorrecta) {
    console.log("Clave correcta! Acceso permitido.");
    // Salimos del bucle
    break;
  } else {
    intentosRealizados++;
    // Verificamos si se agotaron los intentos disponibles
    if (intentosRealizados === intentosPermitidos) {
      console.log("Has agotado todas las oportunidades. Acceso denegado.");
    } else {
      console.log(`Clave incorrecta. Te quedan ${intentosPermitidos - intentosRealizados} intentos.`);
    }
  }
}
