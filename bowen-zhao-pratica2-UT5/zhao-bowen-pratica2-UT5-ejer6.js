`use strict`;
let count = 0
let num 
let t = 1
while(num != "exit") {
    num = prompt ("introduce valor positivo, salir con introducir -exit-")
    if ( num == "exit" ){
    alert("salir")
    }
    else if (num > 0){
        alert(`${num}${t}`)
    }
    else if ( num < 0 ){
        alert("introduce un valor positivos")
    }
}
