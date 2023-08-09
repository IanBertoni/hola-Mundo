import * as readlineSync from 'readline-sync';

// Definir el usuario y la clave en el sistema
const usuarioRegistrado = 'Juan';
const claveRegistrada = 'claveJuan';

// Pedir al usuario que ingrese su nombre de usuario y su clave
const nombreUsuario = readlineSync.question('Ingrese su nombre de usuario: ');
const claveUsuario = readlineSync.question('Ingrese su clave: ');

// Comprobar si el nombre de usuario y la clave ingresados son correctos
if (nombreUsuario === usuarioRegistrado && claveUsuario === claveRegistrada) {
  // Si el usuario y la clave son correctos, mostrar un mensaje de bienvenida
  console.log('Bienvenido al sistema');
} else {
  // Si el usuario y/o la clave son incorrectos, mostrar un mensaje de error
  console.log('Usuario y/o contraseña incorrectos');
}