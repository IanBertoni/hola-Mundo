let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  // Podemos agregar 2 parámetros en la función `nombreCompleto`.
  // Dado que `titulo` y `telefono` son variables locales de nuestra función,
  // no necesitamos usar `this`, ya que no son propiedades de nuestro objeto.
  nombreCompleto: function (titulo, telefono) {
    return `${titulo}: ${this.nombre} ${this.apellido} ${telefono}`;
  },
};

let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

// Mostrar el nombre completo de persona1 con un título y un número de teléfono
console.log(persona1.nombreCompleto("Fisico nuclear", "29341232"));

// Uso de "call" para reutilizar el método `nombreCompleto` de persona1 en persona2.
// Utilizamos "call" para especificar el contexto de persona2.
// Además, pasamos argumentos al método.
console.log(persona1.nombreCompleto.call(persona2, "Ingeniero", "2983581412"));
