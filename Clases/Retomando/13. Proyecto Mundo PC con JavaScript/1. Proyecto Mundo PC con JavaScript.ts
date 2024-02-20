import { log } from "console";

class DispositivoEntrada {
  constructor(protected tipoEntrada: string, protected marca: string) {
    this.tipoEntrada = tipoEntrada;
    this.marca = marca;
  }
  getTipoEntrada() {
    return this.tipoEntrada;
  }
  setTipoEntrada(entrada: string) {
    this.tipoEntrada = entrada;
  }

  getMarca() {
    return this.marca;
  }

  setMarca(marca: string) {
    this.marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  idRaton: number;
  static contadorRatones = 0;
  constructor(protected tipoEntrada: string, protected marca: string) {
    super(marca, tipoEntrada);
    this.idRaton = ++Raton.contadorRatones;
  }

  toString() {
    return `
    Marca: ${this.marca}
    Tipo de entrada: ${this.tipoEntrada}
    Id: ${this.idRaton}
    `;
  }
}

class Teclado extends DispositivoEntrada {
  idTeclado: number;
  static contadorTeclados = 0;

  constructor(protected tipoEntrada: string, protected marca: string) {
    super(marca, tipoEntrada);
    this.idTeclado = ++Teclado.contadorTeclados;
  }
  toString() {
    return `
    Marca: ${this.marca}
    Tipo de entrada: ${this.tipoEntrada}
    Id: ${this.idTeclado}
    `;
  }
}

class Monitor {
  idMonitor: number;
  static contadorMonitores: number = 0;
  constructor(protected marca: string, protected tamaño: string) {
    this.marca = marca;
    this.tamaño = tamaño;
    this.idMonitor = ++Monitor.contadorMonitores;
  }
  getSize() {
    return this.tamaño;
  }

  setSize(size: string) {
    this.tamaño = size;
  }

  getMarca() {
    return this.marca;
  }

  setMarca(marca: string) {
    this.marca = marca;
  }

  getId() {
    return this.idMonitor;
  }

  toString() {
    return ` 
    Marca: ${this.marca}
    Tamaño: ${this.tamaño}
    Id Monitor : ${this.idMonitor}
    `;
  }
}

class Computadora {
  idComputadora: number;
  static contadorComputadoras: number = 0;
  constructor(
    protected nombre: string,
    protected monitor: Monitor,
    protected teclado: Teclado,
    protected raton: Raton
  ) {
    this.idComputadora = ++Computadora.contadorComputadoras;
    this.nombre = nombre;
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }

  toString() {
    return `
    PC: ${this.idComputadora}
    Nombre: ${this.nombre}
    Monitor: ${this.monitor} 
    Teclado: ${this.teclado} 
    Raton: ${this.raton} 
    `;
  }
}

class Orden {
  static contadorOrdenes: number = 0;
  idOrden: number;
  computadoras: Computadora[]; // Define el tipo del array como Computadora[]

  constructor() {
    this.idOrden = ++Orden.contadorOrdenes;
    this.computadoras = [];
  }

  getIdOrden() {
    return this.idOrden;
  }

  agregarComputadora(computadora: Computadora) {
    // Especifica el tipo de 'computadora' como Computadora
    this.computadoras.push(computadora);
  }

  mostrarOrden() {
    let compuradoraOrden = " ";
    for (let computadora of this.computadoras) {
      compuradoraOrden += `\n${computadora}`;
    }
    console.log(`Orden ${this.idOrden}, computadoras: ${compuradoraOrden}}`);
  }
}
let mouse = new Raton("USB C", "Zowie");
let keyboard = new Teclado("USB", "HyperX");
let pantalla = new Monitor("BenQ", "24 Pulgadas");

let mouse2 = new Raton("Bluetooth", "Noga");
let keyboard2 = new Teclado("Pci", "Pepe");
let pantalla2 = new Monitor("Samsung", "3222 Pulgadas");

let pc = new Computadora("Markitos", pantalla, keyboard, mouse);
let pc2 = new Computadora("Ian", pantalla2, keyboard2, mouse2);

console.log(mouse);
console.log(keyboard);
console.log(pantalla);

console.log(`${pc.toString()}`);
pc.toString();
console.log(pc2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(pc);

let orden2 = new Orden();
orden2.agregarComputadora(pc2);
