class Celular {
  constructor(color, peso, tamaño, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.camara = rdc;
    this.ram = ram;
    this.encendido = false;
  }
  powerBottom() {
    if (this.encendido == false) {
      alert("Starting Up");
      this.encendido = true;
    } else {
      alert("el celular se esta apagando");
      this.encendido = false;
    }
  }

  reiniciar() {
    if (this.encendido == true) {
      alert("reiniciando");
    } else {
      alert("ya esta apagado");
    }
  }

  fotos() {
    alert(`se saco la foto en ${this.camara} `);
  }
  video() {
    alert(`se grabo el video en ${this.camara} `);
  }
  mostrarInfo() {
    return `
    Color: <b>${this.color}</b></br>
    Peso: <b>${this.peso}</b></br>
    Tamaño: <b>${this.tamaño}</b></br>
    Ram: <b>${this.ram}</b></br>
    Resolucion de Video: <b>${this.camara}</b></br>
    `;
  }
}

// celular1 = new Celular("Rojo", "150 gr", "5 pulgadas", "HD", "2GB");
// celular2 = new Celular("Negro", "250 gr", "6.5 pulgadas", "FULL HD", "4GB");
// celular3 = new Celular("Blanco", "167 gr", "5.4 pulgadas", "4k HD", "8GB");

// celular1.powerBottom();
// celular1.fotos();
// celular1.video();
// celular1.reiniciar();
// celular1.powerBottom();
// document.write(`
// ${celular1.mostrarInfo()} <br>
// ${celular2.mostrarInfo()} <br>
// ${celular3.mostrarInfo()} <br>
// `);

class CelularAltaGama extends Celular {
  constructor(color, peso, tamaño, rdc, ram, rdce) {
    super(color, peso, tamaño, rdc, ram);
    this.resolucionCamaraLenta = rdce;
  }
  grabarVideoLento() {
    alert("Grabando in slow Motion");
  }
  reconocimientoFacial() {
    alert("Escaneando rostro");
  }
  infoAltaGama() {
    return this.mostrarInfo() + `resolucion de camara trasera: `;
  }
}

// celular1 = new CelularAltaGama(
//   "Rojo",
//   "150 gr",
//   "5 pulgadas",
//   "HD",
//   "2GB",
//   "Full HD"
// );
// celular2 = new CelularAltaGama(
//   "Black",
//   "130 gr",
//   "5 pulgadas",
//   "HD",
//   "6GB",
//   "HD"
// );

document.write(`
${celular1.infoAltaGama()} <br>
${celular2.infoAltaGama()} <br>`);
