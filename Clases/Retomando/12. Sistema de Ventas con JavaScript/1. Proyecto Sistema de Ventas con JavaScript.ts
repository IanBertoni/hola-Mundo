class Producto {
  static contadorProductos: number = 0;
  idProducto: number;

  constructor(protected nombre: string, protected precio: number) {
    this.idProducto = ++Producto.contadorProductos;
    this.nombre = nombre;
    this.precio = precio;
  }

  getIdProduct(): number {
    return this.idProducto;
  }

  getName(): string {
    return this.nombre;
  }

  setName(nombre: string): void {
    this.nombre = nombre;
  }

  getPrice(): number {
    return this.precio;
  }

  setPrice(precio: number): void {
    this.precio = precio;
  }

  toString() {
    return `
      Id: ${this.idProducto} 
      Nombre: ${this.nombre}
      Precio: ${this.precio}
      `;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor(
    private idOrden: number,
    private productos: Producto[],
    private contadorProductosAgregados: number
  ) {
    this.idOrden = ++Orden.contadorOrdenes;
    // No es necesario inicializar productos aquí
  }

  getIdOrden() {
    return this.idOrden;
  }

  AgregarProductos(producto: Producto) {
    if (this.productos.length < Orden.MAX_PRODUCTOS) {
      this.productos.push(producto);
      this.contadorProductosAgregados++;
    } else {
      console.log("No hay más lugar en el carrito");
    }
  }

  calcularTotal(): number {
    let totalVenta = 0;
    for (let producto of this.productos) {
      totalVenta += producto.getPrice();
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this.productos) {
      productoOrden += `${producto.toString()} `;
    }

    console.log(`
      Orden: ${this.idOrden} 
      Total: ${this.calcularTotal()}
      Productos: ${productoOrden}
      `);
  }
}

// Crear algunos productos
let producto1 = new Producto("Camisa", 20);
let producto2 = new Producto("Pantalón", 30);
let producto3 = new Producto("Zapatos", 50);

// Crear una orden
let orden = new Orden(1, [], 0);

// Agregar productos a la orden
orden.AgregarProductos(producto1);
orden.AgregarProductos(producto2);
orden.AgregarProductos(producto3);

// Mostrar la orden
orden.mostrarOrden();

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(orden);
console.log(typeof orden);
