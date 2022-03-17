`use strict`;
let num 
let t = 0
while( num != -1) {
    num = prompt ("introduce valor entre 0 y 10, termina con introdicir -1")
    if (num >= -1 && num <= 10){
        if (num >= 0 && num <= 10){ 
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