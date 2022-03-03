//Ejercicio 3
//const Dact = prompt("dia actual")
'use strict';

const Nombre = prompt("Nombre del trabajador")
const Horas = prompt("Número de horas de trabajo")
const PrecioHora = prompt("El precio que cobra el trabajador por hora")
const Dias = prompt("¿Cuantos días trabajas al mes?")

const Bruto = PrecioHora * Horas * Dias

const ImpuestoH = PrecioHora * Horas * Dias * 20 / 100

const ImpuestoSS = PrecioHora * Horas * Dias * 8 / 100

const ImpuestoTODOS = ImpuestoH + ImpuestoSS

const Neto = Bruto - ImpuestoTODOS

    console.log("Nombre del trabajador " + Nombre)

    console.log ("Lo que gana en un dia " + PrecioHora * Horas)

    console.log ("El salario bruto " + PrecioHora * Horas * Dias)

    console.log ("Lo que paga de Imputos a Hacienda " + PrecioHora * Horas * Dias * 20 / 100)

    console.log ("Lo que paga de la Seguridad Social " + PrecioHora * Horas * Dias * 8 / 100)

    console.log("Lo que gana neto " + Neto)