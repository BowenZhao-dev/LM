`use strict`;
let count
let resu
function multiplo(num1, num2){
    count = num1
    while ( count <= num2 ){
        resu = count * 4
        alert(count + "x" + 4 + "=" + resu)
        count++
    }
}
 mult1 = Number(prompt("introduce el primer numero de rango"))
 mult2 = Number(prompt("introduce el numero final de rango"))
 multiplo(mult1,mult2)