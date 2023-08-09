// Definimos la clase Alumno, representa a los estudiantes de la escuela
class Alumno {
    private nombre: string; 
    private nota: number;   

    // Constructor para crear un alumno con nombre y nota
    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // Método para saber si el alumno está aprobado (nota mayor o igual a 7)
    estaAprobado(): boolean {
        return this.nota >= 7;
    }
}

// Definimos la clase Profesor, representa a los maestros de la escuela
class Profesor {
    private nombre: string; 
    private materia: string; 

    // Constructor para crear un profesor con nombre y materia
    constructor(nombre: string, materia: string) {
        this.nombre = nombre;
        this.materia = materia;
    }
}

// Definimos la clase Escuela, lo que administra alumnos y profesores
class Escuela {
    private alumnos: Alumno[]; // Lista de alumnos inscriptos
    private profesores: Profesor[]; // Lista de profesores contratados

    // Constructor para crear la escuela con listas vacías de alumnos y profesores
    constructor() {
        this.alumnos = [];
        this.profesores = [];
    }

    // Método para matricular a un alumno en la escuela
    matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    // de aca para abajo necesite ayuda de chatgpt.
    
    // Método para expulsar a un alumno de la escuela
expulsarAlumno(alumno: Alumno): void {
    const index = this.alumnos.indexOf(alumno); // Buscamos al alumno en la lista de alumnos
    if (index !== -1) { // Si encontramos al alumno en la lista
        this.alumnos.splice(index, 1); // Lo sacamos de la lista con .splice
    }
}

// Método para contratar a un profesor en la escuela
contratarProfesor(profesor: Profesor): void {
    this.profesores.push(profesor); // Agregamos al profesor al final de la lista de profesores con .push
}

// Método para despedir a un profesor de la escuela
despedirProfesor(profesor: Profesor): void {
    const index = this.profesores.indexOf(profesor); // Buscamos al profesor en la lista de profesores
    if (index !== -1) { // Si encontramos al profesor en la lista
        this.profesores.splice(index, 1); // Lo sacamos de la lista de profesores
    }
}
}

//utilizamos indexOf para buscar la posición del alumno o profesor en la respectiva lista. Si el valor devuelto por indexOf no es igual a -1, significa que el alumno o profesor está en la lista. Luego, usamos splice para eliminar ese elemento del arreglo, logrando así la expulsión del alumno o el despido del profesor de la escuela.