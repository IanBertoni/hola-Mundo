import * as readlineSync from 'readline-sync';

const altura: number = readlineSync.questionInt('Por favor, introduce tu altura en centímetros: ');

if (altura >= 130) {
  console.log('podes subirte a la montaña rusa.');
} else {
  console.log('No cumplis con la estatura minima.');
}
