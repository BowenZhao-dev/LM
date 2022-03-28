`use strict`;
let resu
function divicion(num1,num2){
if (num1 == 0){
 alert("El primer número es 0, no se puede dividir")
}
else{
   resu = num1 / num2
   alert(num1 + " divide " + num2 + "=" + resu)
}
}
 div1 = Number(prompt("introduce primer numero para dividir"))
 div2 = Number(prompt("introduce secundo numero para dividir"))
divicion(div1,div2)
