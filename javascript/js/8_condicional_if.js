"use strict"

/* Crear 2 variables (Usuario y contraseña) y las van a comparar
con el Usuario y la contraseña que viene de la BD
Si el usuario tiene acceso el sistema arrojará un mensaje de bienvenida. De lo contrario
le informará al usuario que no tiene acceso. */
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
