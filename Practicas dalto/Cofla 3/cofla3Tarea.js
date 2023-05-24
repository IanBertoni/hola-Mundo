const obtenerInformacion = (materia) => {
  const materias = {
    fisica: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Marie Curie",
    ],
    programacion: ["Ada Lovelace", "Linus Torvalds", "Grace Hopper"],
    logica: [
      "George Boole",
      "Kurt Gödel",
      "Alan Turing",
      "John von Neumann",
      "Emil Post",
    ],
    quimica: [
      "Dmitri Mendeléyev",
      "Marie Curie",
      "Antoine Lavoisier",
      "Louis Pasteur",
      "Rosalind Franklin",
    ],
  };

  if (materias[materia] !== undefined) {
    return [materias[materia], materia];
  } else {
    return false;
  }
};

let informacion = obtenerInformacion("quimica");

if (informacion !== false) {
  const nombres = informacion[0].join(", ");
  document.write(`Los alumnos presentes en ${informacion[1]}: ${nombres}`);
}
