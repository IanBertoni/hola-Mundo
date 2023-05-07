import * as rls from 'readline-sync';

// Creo dos arreglos vacíos: uno para guardar el nombre de los alumnos y otro para las notas de cada uno
let alumnos: string[] = [];
let notas: number[][] = [];

// Utilizo un bucle while para pedir el nombre y las notas de cada alumno hasta que el usuario ingrese un espacio en blanco
while (true) {
  console.log("Para salir del sistema ingrese un espacio en blanco.");
  let nombre = rls.question("Ingrese el nombre del alumno: ");

  // Si el usuario mete un espacio en blanco, salimos del bucle while
  if (nombre === "") {
    break;
  }

  // se agrega el nombre del alumno al arreglo
  alumnos.push(nombre);

  // Creo un arreglo vacio para las notas de este alumno
  let notasAlumno: number[] = [];

  // se piden las notas de cada trimestre y las agregamos al arreglo de notas del alumno actual
  for (let i: number = 0; i <= 2; i++) {
    notasAlumno[i] = rls.questionFloat(`Ingrese la nota por trimestre ${i + 1}: `);
  }

  notas.push(notasAlumno);
}

// se muestran los promedios de cada alumno
for (let i: number = 0; i < alumnos.length; i++) {
  // Creamos una variable para guardar el promedio del alumno actual
  let promedio: number = 0;

  // se recorre las notas del alumno actual y se suma cada una para luego calcular el promedio
  for (let j: number = 0; j < notas[i].length; j++) {
    promedio += notas[i][j];
  }
  promedio /= 3;

  // Mostramos el promedio del alumno actual redondeado a dos decimales con el metodo .toFixed(2)
  console.log(`El promedio anual del alumno ${alumnos[i]} es ${promedio.toFixed(2)}.`);
}
