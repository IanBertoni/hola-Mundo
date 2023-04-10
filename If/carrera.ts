// Importar la librería readline-sync de Node.js
import * as readlineSync from 'readline-sync';

// Pedir al usuario que ingrese la posición en la carrera
const posicion = readlineSync.question('Ingrese la posición en la carrera: ');

// Determinar el tipo de medalla según la posición
if (posicion === '1') {
  // Si la posición es 1, entregar medalla de oro
  console.log('Medalla de oro');
} else if (posicion === '2') {
  // Si la posición es 2, entregar medalla de plata
  console.log('Medalla de plata');
} else if (posicion === '3') {
  // Si la posición es 3, entregar medalla de bronce
  console.log('Medalla de bronce');
} else {
  // Si la posición es distinta de 1, 2 o 3, entregar certificado de participación
  console.log(`Certificado de participación por llegar en la posicion n° ${posicion}`);
}
