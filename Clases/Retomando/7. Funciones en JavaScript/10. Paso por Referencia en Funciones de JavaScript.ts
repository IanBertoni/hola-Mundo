// A un objeto se le puede asignar propiedades y métodos.
const persona = {
  nombre: "Ian",
  apellido: "Bertoni",
};

// Esta función modifica las propiedades del objeto pasado como argumento.
// En JavaScript, los objetos se pasan por referencia, lo que significa que 'p1' apunta al mismo objeto en memoria que 'persona'.
function cambiarValorObjeto(p1) {
  p1.nombre = "Marcos";
  p1.apellido = "Skousen";
}

// Al llamar a la función 'cambiarValorObjeto' con el objeto 'persona' como argumento,
// se modifica directamente el objeto 'persona' ya que 'p1' hace referencia al mismo objeto en memoria.
// Ejemplo de paso por referencia.
cambiarValorObjeto(persona);

console.log(persona); // Output: { nombre: 'Marcos', apellido: 'Skousen' }
