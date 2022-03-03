//Ejercicio 3
//const Dact = prompt("dia actual")
'use strict';

const name = prompt("Nombre del trabajador")
const time = prompt("Número de horas de trabajo")
const moneytime = prompt("El precio que cobra el trabajador por hora")
const day = prompt("¿Cuantos días trabajas al mes?")

const Bruto = moneytime * time * day

const tax = moneytime * time * day * 20 / 100

const taxss = moneytime * time * day * 8 / 100

const taxall = tax + taxss

const Neto = Bruto - taxall

    alert("Nombre " + name)

    alert("gana en un dia" + moneytime * time)

    alert("salario bruto " + moneytime * time * day)

    alert("Imputos a Hacienda " + moneytime * time * day * 20 / 100)

    alert("Seguridad Social " + moneytime * time * day * 8 / 100)

    alert("neto " + Neto)