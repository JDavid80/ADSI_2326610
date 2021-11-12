
/* 
Suma.............+
Resta............-
Multiplicación...*
División........./
Residuo..........%
*/

/* Crear 3 productos, los inicializan con un valor*/
/* A los 3 productos les van a descontar el 5% */
/* Existencia de cada producto y hallar el costo del inventario*/

/* Crear 3 productos. Dichos productos serán inicializados con un valor. A cada
producto le van a descontar el 5% y cada producto tiene una existencia. Al final 
determinar cual es el valor total del inventario teniendo en cuenta el descuento. */

/* Declarando e inicializando las variables */
var producto1 = 25200;
var producto2 = 12600;
var producto3 = 3450;
var cantProducto1 = 5;
var cantProducto2 = 7;
var cantProducto3 = 12;
var descuentoProductos = .05;

/* Obteniendo el valor con descuento */
var producto1ConDesc = producto1 - (producto1 * descuentoProductos);
console.log(producto1ConDesc);
var producto2ConDesc = producto2 - (producto2 * descuentoProductos);
console.log(producto2ConDesc);
var producto3ConDesc = producto3 - (producto3 * descuentoProductos);
console.log(producto3ConDesc);

/* Obteniendo el valor individual total */
var totalProducto1 = cantProducto1 * producto1ConDesc;
var totalProducto2 = cantProducto2 * producto2ConDesc;
var totalProducto3 = cantProducto3 * producto3ConDesc;

/* Obteniendo el valor Total de todos los productos */
var totalProductos = totalProducto1 + totalProducto2 + totalProducto3;

console.log("El valor total del inventario es de: $" + totalProductos);
