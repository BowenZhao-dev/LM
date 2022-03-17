`use strict`;
let count = 0
let num 
let t = 0
while( count < 10 && num != -1) {
    num = prompt ("introduce valor entre 0 y 10, termina con introdicir -1")
    if (num >= -1 && num <= 10){
        if (num >= 0 && num <= 10) { 
            count++
            if( num == 10){
                t++
            }
        }
        else{
            alert("exit")
        }
    }
    else{
        alert("introduce un valor valido")
    }
}
alert(`total hay ${t} de 10`)