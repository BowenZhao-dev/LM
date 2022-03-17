`use strict`;
let resu = ""
const rest = "s"
let num
while ( num != "s"){
    num=prompt("introduce dinero, termina con introducir -s-")
    resu=num+resu
}
    resu=resu.replace("s","")
    if( resu < 50 ){
        alert(`habitacion tipo 1`)
    }
    else if( resu >= 50 && resu < 100 ){
        alert(`habitacion tipo 2`)
    }
    else if( resu >= 50 && resu < 150 ){
        alert(`habitacion tipo 3`)
    }
    if( resu > 150 ){
        alert(`habitacion suite`)
    }
    