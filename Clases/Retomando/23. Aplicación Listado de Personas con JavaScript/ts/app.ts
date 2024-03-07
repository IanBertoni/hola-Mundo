import { Persona } from "./persona";

const personas = [
  new Persona("Ian", "Bertoni"),
  new Persona("Mark", "Skousen"),
  new Persona("ivo", "bertoni"),
];

function mostrarPersonas() {
  console.log("Ejecutando 'Mostrar Personas...'");
  let texto = "";

  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}
