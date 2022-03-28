`use strict`;
let count=-1
let res
function MostrarTablaMultiplicar(num)
{
    
    while(count !=9 ){
        count++
        res = num * count
        console.log(num + "x" + count + "=" + res ) 
    } 
}
let ask=prompt("introduce un numero para saber la tabla de multiplicar")
MostrarTablaMultiplicar(ask)