import readlineSync from 'readline-sync';

// Definir los precios de los productos
const productoUnoPrecio = 200;
const productoDosPrecio = 350;

//La sintaxis ${} se usa para insertar el valor de una variable o expresión en una cadena de texto de manera más sencilla y legible. En lugar de concatenar manualmente los valores, simplemente se usa ${} para insertarlos dentro de la cadena de texto.

// Leer la cantidad de cada producto que el usuario quiere comprar
const cantidadProductoUno = readlineSync.questionInt(`Ingrese la cantidad de producto uno que desea comprar (precio: $${productoUnoPrecio}): `);
const cantidadProductoDos = readlineSync.questionInt(`Ingrese la cantidad de producto dos que desea comprar (precio: $${productoDosPrecio}): `);

// Calcular el precio total de la compra
const precioTotal = (productoUnoPrecio * cantidadProductoUno) + (productoDosPrecio * cantidadProductoDos);

// Verificar si el cliente gasta más de $1000 para aplicar el descuento
if (precioTotal > 1000) {
  const descuento = precioTotal * 0.1;
  const precioConDescuento = precioTotal - descuento;
  console.log(`El precio total de la compra es $${precioConDescuento.toFixed(2)} (con descuento del 10%).`);
} else {
  console.log(`El precio total de la compra es $${precioTotal.toFixed(2)}.`);
}


//  .toFixed(2) es una herramienta que usamos para redondear un número a dos puntos decimales y devolverlo como un texto. En el código, lo uso para que cuando mostremos el precio total de la compra en la consola, se muestre con solo dos decimales después del punto. Así queda más ordenado y fácil de leer.