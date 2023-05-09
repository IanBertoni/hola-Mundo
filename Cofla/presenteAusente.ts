import * as rls from 'readline-sync'

let cantidad: number = rls.questionInt("Cuantos alumnos son?: ");
let alumnosTotales : any[] = [];

for (let i : number = 0; i < cantidad; i++) {
    alumnosTotales[i] = [rls.question(`nombre del alumno ${i + 1}`), 0];

}

const tomarAsistencia = (nombre,p) =>{
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}       

for (let i:number = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado: string = `${alumnosTotales[alumno][0]}:<br>
    ___________Presentes: ${alumnosTotales[alumno][1]}:<br>
    ___________Ausencias: ${30 - alumnosTotales[alumno[1]]}
    `
}