const mostrarReloj = () => {
  let fecha = new Date();
  let hr = fecha.getHours().toString().padStart(2, "0"); // Agrega un cero inicial si es necesario
  let minutes = fecha.getMinutes().toString().padStart(2, "0"); // Agrega un cero inicial si es necesario
  let seg = fecha.getSeconds().toString().padStart(2, "0"); // Agrega un cero inicial si es necesario
  document.getElementById("hora").innerHTML = `${hr}:${minutes}:${seg}`;
};

const mostrarFecha = () => {
  let fecha = new Date();
  let day = fecha.getDate().toString().padStart(2, "0"); // Agrega un cero inicial si es necesario
  let mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Agrega un cero inicial si es necesario
  let year = fecha.getFullYear();
  document.getElementById("fecha").innerHTML = `${day}/${mes}/${year}`;
};

setInterval(mostrarReloj, 1000);
setInterval(mostrarFecha, 1000);
