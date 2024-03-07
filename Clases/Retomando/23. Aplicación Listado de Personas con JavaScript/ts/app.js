const personas = [
  { nombre: "Ian", apellido: "Bertoni" },
  { nombre: "Mark", apellido: "Skousen" },
  { nombre: "ivo", apellido: "bertoni" },
];

function mostrarPersonas() {
  console.log("Ejecutando 'Mostrar Personas...'");
  let texto = "";

  for (let persona of personas) {
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = { nombre: nombre.value, apellido: apellido.value };
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else {
    console.log("No hay información completa");
  }
}
