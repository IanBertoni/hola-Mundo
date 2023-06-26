document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  var nombre = document.getElementsByName("nombre")[0].value;
  var alias = document.getElementsByName("alias")[0].value;
  var genero = document.querySelector('input[name="genero"]:checked').value;
  var poderes = [];
  var checkboxes = document.getElementsByName("poderes[]");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      poderes.push(checkboxes[i].value);
    }
  }
  var telefono = document.getElementsByName("telefono")[0].value;
  var email = document.getElementById("email").value;
  var motivacion = document.getElementById("motivacion").value;

  // Construir la URL para el nuevo HTML con las respuestas
  var url =
    "respuestas.html?nombre=" +
    encodeURIComponent(nombre) +
    "&alias=" +
    encodeURIComponent(alias) +
    "&genero=" +
    encodeURIComponent(genero) +
    "&poderes=" +
    encodeURIComponent(poderes.join(", ")) +
    "&telefono=" +
    encodeURIComponent(telefono) +
    "&email=" +
    encodeURIComponent(email) +
    "&motivacion=" +
    encodeURIComponent(motivacion);

  // Abrir el nuevo HTML en una nueva ventana o pestaña
  window.open(url, "_blank");
});
