"use strict"

/* &&.....AND */
/* ||.....OR */
/* ^.....XOR */

/* Subsidio de Transporte. 
Si el aprendiz tiene SISBEN pero no tiene Jovenes en Acción 
puede acceder al beneficio del subsidio.
Si el aprendiz tiene Jovenes en Acción pero no tiene SISBEN
también puede acceder al beneficio
Si el aprendiz tiene Jovenes en Acción y tiene SISBEN
no puede acceder al beneficio
Si el aprendiz no tiene SISBEN y no tiene
Jovenes en acción NO puede acceder al beneficio */

var SisbenAprendiz = true;
var jovenesAccionAprendiz = false;

if (SisbenAprendiz === true ^ jovenesAccionAprendiz === true) {
    console.log("Usted puede acceder al beneficio.");
}
else {
    console.log("Usted no puede acceder al beneficio.");
}

