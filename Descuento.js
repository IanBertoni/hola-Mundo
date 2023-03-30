"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
// Definir los precios de los productos
var productoUnoPrecio = 200;
var productoDosPrecio = 350;
// Leer la cantidad de cada producto que el usuario quiere comprar
var cantidadProductoUno = readline_sync_1["default"].questionInt("Ingrese la cantidad de producto uno que desea comprar (precio: $".concat(productoUnoPrecio, "): "));
var cantidadProductoDos = readline_sync_1["default"].questionInt("Ingrese la cantidad de producto dos que desea comprar (precio: $".concat(productoDosPrecio, "): "));
// Calcular el precio total de la compra
var precioTotal = (productoUnoPrecio * cantidadProductoUno) + (productoDosPrecio * cantidadProductoDos);
// Verificar si el cliente gasta más de $1000 para aplicar el descuento
if (precioTotal > 1000) {
    var descuento = precioTotal * 0.1;
    var precioConDescuento = precioTotal - descuento;
    console.log("El precio total de la compra es $".concat(precioConDescuento.toFixed(2), " (con descuento del 10%)."));
}
else {
    console.log("El precio total de la compra es $".concat(precioTotal.toFixed(2), "."));
}
