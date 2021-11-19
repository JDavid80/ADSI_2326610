"use strict"

/* Crear 2 variables (Usuario y contraseña) y las van a comparar
con el Usuario y la contraseña que viene de la BD
Si el usuario tiene acceso el sistema arrojará un mensaje de bienvenida. De lo contrario
le informará al usuario que no tiene acceso. */

/* Condicional Compuesto */
var user = "andres";
var pass= 1234;
var userBD = "andres";
var passBD = 2537;
if (user === userBD && pass === passBD) {
    console.log("Bienvenido");
}
else {
    console.log("Usuario y/o clave incorrecta.");
}

/* Condicional anidado */
/* Sistema que me permita calcular un descuento compuesto */
/* Agencia de Viajes. 
1. Si la persona que va a viajar no ha cumplido los 10 años al momento
del viaje o ya cumplió los 70 años tendrá
 un 10% de descuento en el tiquete aereo.
2. Si el destino turistico del anterior pasajero es Cartagena
tienen un 10% de descuento adicional sobre el precio final.
3. Si ademas del destino Cartagena, la aerolínea de dicho pasajero 
es Latam tiene otro 10% de descuento
adicional acumulable sobre el precio final
4. Hallar el valor final del tiquete. Las variables y el contenido
de las mismas será ingresado por cada uno*/
var edadUsuario = 9; 
var destinoUsuario = "Cartagena";
var aerolineaUsuario = "Avianca";
var destinoDescuento = "Cartagena"
var aerolineaDescuento = "Latam";
var costoTiquete = 250000;
var descuento = .10;
var costoFinal = 0;
var descuentosUsuario = "";

if (edadUsuario < 10 || edadUsuario >= 70) {
    costoTiquete = costoTiquete - (costoTiquete * descuento);
    descuentosUsuario = "Por Edad";
    if (destinoUsuario === destinoDescuento) {
        costoTiquete = costoTiquete - (costoTiquete * descuento);
        descuentosUsuario = descuentosUsuario + ", Por Destino";
    }
    if (aerolineaUsuario === aerolineaDescuento) {
        costoTiquete = costoTiquete - (costoTiquete * descuento);
        descuentosUsuario += " y por aerolínea";
    }
}
if (descuentosUsuario != "") {
    console.log("Usted recibio descuentos por: " + descuentosUsuario);
    console.log("El valor final del tiquete con descuentos es: $" + costoTiquete);
}
else {
    console.log("El valor final del tiquete es: $" + costoTiquete);
    console.log("Lo sentimos, no aplica para ningún descuento");
}
/* if
      Si el if se cumple, dentro va otro if
          Si el if se cumple, dentro va otro if */

/* Sistema de Votación.
Teniedo en cuenta la edad del ciudadano, el sistema le informa si puede
o no puede votar. */
var edadCiudadano = 18;
var edadMinima = 18;
var edadMaxima = 140;

if (edadCiudadano >= edadMinima && edadCiudadano <= edadMaxima) {
    console.log("Bienvenido. Usted cumple las condiciones para votar.");
}
else if (edadCiudadano < 18){
    console.log("Lo sentimos,aún no cumple con la edad mínima para ejercer el voto");
}
else {
    console.log("Lo sentimos, ha ocurrido un problema. Comuniquese con el administrador.");
}
































