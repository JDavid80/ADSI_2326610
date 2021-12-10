"use strict"

var fechaActual = new Date();
console.log(fechaActual);

/* Métodos para descomponer la fecha */
var anyoActual = fechaActual.getFullYear();
console.log("Año Actual: " + anyoActual);
var mesActual = fechaActual.getMonth();
console.log("Mes Actual: " + (mesActual + 1));
var diaActual = fechaActual.getDate();
console.log("Día Actual: " + diaActual);
var diaSemana = fechaActual.getDay();
console.log("Día semana: " + (diaSemana + 1));
var horaActual = fechaActual.getHours();
console.log("Hora Actual: " + horaActual);
var minutosActual = fechaActual.getMinutes();
console.log("Minutos Actual: " + minutosActual);
var segundosActual = fechaActual.getSeconds();
console.log("Segundos: " + segundosActual);
var msActual = fechaActual.getMilliseconds();
console.log("Milisegundos: " + msActual);
var ms1970 = fechaActual.getTime();
console.log("MS desde 1970: " + ms1970);

var diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var diaSemanaStr = diasSemana[diaSemana];

console.log("Hoy es " + diaSemanaStr + ", " + diaActual + " del mes " + mesActual + " del año " + anyoActual + "." +
             "Son las " + horaActual + ":" + minutosActual);

/* Especificar una fecha para determinar la diferencia */
