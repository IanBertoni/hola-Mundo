// Obtener los parámetros de la URL
var params = new URLSearchParams(window.location.search);
var nombre = params.get("nombre");
var alias = params.get("alias");
var genero = params.get("genero");
var poderes = params.get("poderes");
var telefono = params.get("telefono");
var email = params.get("email");
var motivacion = params.get("motivacion");

// Construir el contenido de las respuestas
var respuestaHTML =
  "<p><strong>Nombre:</strong> " +
  nombre +
  "</p>" +
  "<p><strong>Alias:</strong> " +
  alias +
  "</p>" +
  "<p><strong>Género:</strong> " +
  genero +
  "</p>" +
  "<p><strong>Poderes:</strong> " +
  poderes +
  "</p>" +
  "<p><strong>Teléfono:</strong> " +
  telefono +
  "</p>" +
  "<p><strong>Correo electrónico:</strong> " +
  email +
  "</p>" +
  "<p><strong>Motivación para unirse:</strong> " +
  motivacion +
  "</p>";

// Agregar el contenido al contenedor de respuestas
var respuestaContainer = document.getElementById("respuesta");
respuestaContainer.innerHTML = respuestaHTML;
