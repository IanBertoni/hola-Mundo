"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var altura = readlineSync.questionInt('Por favor, introduce tu altura en centímetros: ');
if (altura >= 130) {
    console.log('podes subirte a la montaña rusa.');
}
else {
    console.log('No cumplis con la estatura minima.');
}
