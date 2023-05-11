class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  instalar() {
    if (this.instalada === false) {
      this.instalada = true;
      alert("App Instalada");
    } else {
      alert("La app ya está instalada");
    }
  }

  desinstalar() {
    if (this.instalada === true) {
      this.instalada = false;
      alert("App Desinstalada");
    } else {
      alert("La app no está instalada");
    }
  }

  abrir() {
    if (this.iniciada === false && this.instalada === true) {
      this.iniciada = true;
      alert("App Abierta");
    } else if (this.iniciada === true) {
      alert("La app ya está abierta");
    } else {
      alert("La app no está instalada");
    }
  }

  cerrar() {
    if (this.iniciada === true) {
      this.iniciada = false;
      alert("App Cerrada");
    } else {
      alert("La app no está abierta");
    }
  }
  appInfo() {
    return `
    Descargas: <b>${this.descargas}</b><br>
    Puntuacion: <b>${this.puntuacion}</b><br>
    Peso: <b>${this.peso}</b><br>
    `;
  }
}

const app1 = new App("15.600", "5 estrellas", "900 MB");
const app2 = new App("7.500", "4.5 estrellas", "600 MB");
const app3 = new App("2.100", "3 estrellas", "150 MB");
const app4 = new App("10.200", "4 estrellas", "800 MB");
const app5 = new App("4.500", "3.5 estrellas", "500 MB");
const app6 = new App("9.800", "4.2 estrellas", "700 MB");
const app7 = new App("6.300", "3.8 estrellas", "400 MB");

document.write(`
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`);

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();
alert("Chupame la verga maquinola");
