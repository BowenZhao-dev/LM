`use strict`;
let celsuis
let k
let farenheit
 function temp(grado)
 {
    celsuis = grado
    k = grado + 273.15 
    farenheit = (grado * 9 / 5) + 32
    alert( grado + " celsuis es equavale a " + k +" kelvin "+farenheit+" farenheit")
 }
 let gradnum = Number(prompt("introduce el grado c que nesesita convertir"))
temp(gradnum)