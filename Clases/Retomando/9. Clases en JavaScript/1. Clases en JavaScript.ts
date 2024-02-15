// Una clase es una plantilla donde definimos los métodos y atributos.
// En este caso, la clase `Persona` tiene dos atributos: `nombre` y `apellido`.

// `this.nombre` se refiere al atributo `nombre` de la instancia de la clase.
// Representa el valor específico de `nombre` para cada objeto creado a partir de esta clase.

// `nombre` (sin `this`) se refiere al parámetro `nombre` que pasamos al constructor.
// Es el valor que asignamos a la propiedad `nombre` cuando creamos una nueva instancia de la clase.

class Persona {
  // Aquí definimos los atributos de la instancia y les asignamos valores.
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  nombre = "Ian";
  apellido = "Bertoni";
}
// con la palabra reservada "new" + el nombre de la clase, se crea una nueva clase, y luego hay que pasarle los parametros de nombre y apellido.
let persona1 = new Persona("Markitos", "Bertoni");

console.log(persona1);
