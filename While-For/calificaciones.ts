import * as rls from 'readline-sync';

let nombre: string;
let notaPractica: number;
let notaProblemas: number;
let notaTeorica: number;
let notaFinal: number;

do {
  nombre = rls.question("Ingresa el nombre del alumno: ");
  
  if (nombre != "") {
    notaPractica = rls.questionFloat("Ingresa la nota práctica del alumno (entre 0 y 10): ");
    
    while (notaPractica < 0 || notaPractica > 10) {
      console.log("La nota debe estar entre 0 y 10");
      notaPractica = rls.questionFloat("Ingresa la nota práctica del alumno (entre 0 y 10): ");
    }
    
    notaProblemas = rls.questionFloat("Ingresa la nota de problemas del alumno (entre 0 y 10): ");
    
    while (notaProblemas < 0 || notaProblemas > 10) {
      console.log("La nota debe estar entre 0 y 10");
      notaProblemas = rls.questionFloat("Ingresa la nota de problemas del alumno (entre 0 y 10): ");
    }
    
    notaTeorica = rls.questionFloat("Ingresa la nota teórica del alumno (entre 0 y 10): ");
    
    while (notaTeorica < 0 || notaTeorica > 10) {
      console.log("La nota debe estar entre 0 y 10");
      notaTeorica = rls.questionFloat("Ingresa la nota teórica del alumno (entre 0 y 10): ");
    }
    
    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
    
    console.log(`${nombre} ha obtenido una nota final de ${notaFinal}`);
  }
  } while (nombre != ""){
    console.log("nos vimos");
};