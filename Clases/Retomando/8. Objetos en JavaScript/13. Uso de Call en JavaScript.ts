let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

console.log(persona1.nombreCompleto());

// Uso de "call" para reutilizar el método nombreCompleto de persona1 en persona2

// Utilizamos "call" para especificar el contexto de persona2

console.log(persona1.nombreCompleto.call(persona2));
