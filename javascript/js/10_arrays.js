"use strict"

/* 1er. forma de declarar un array */
var usuario1 = new Array();
usuario1[0] = 1;
usuario1[1] = "1084330256";
usuario1[2] = "Roberto";
usuario1[3] = "Gómez";
usuario1[4] = "2012-11-25";
usuario1[5] = "Cartagena";
usuario1[6] = "Latam";

/* 2da. forma de declarar un array */
var usuario2 = new Array(2, "1034568976", "Juan Felipe", "Moreno", "2010-05-06", "San Andrés", "Avianca");

/* 3er. forma de declarar un array */
var usuario3 = [3, "1025896874", "Kevin", "Murcia", "2009-05-16", "Cartagena", "American Airlines"];

console.log("Nombre usuario 1: " + usuario1[2]);
console.log("Nombre usuario 2: " + usuario2[2]);
console.log("Nombre usuario 3: " + usuario3[2]);

/* Sistema que me permita contar los carácteres de una frase.
Si el usuario superó el tope(20), informarle a traves de un mensaje. */

var mensajeUsuario = "No me gusto!";
var longitudMensajeUsuario = mensajeUsuario.length;

if (longitudMensajeUsuario > 20) {
    console.log("El mensaje excede la longitud de carácteres permitidos");
}
else if (longitudMensajeUsuario < 20) {
    console.log("El mensaje fue enviado con éxito");
}
else {
    console.log("Ha surgido un error!");
}

usuario2.shift();
console.log(usuario2[0]);












