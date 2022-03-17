`use strict`;
let count = 0
let counter = 0
let num 
while( count < 100) {
    num = prompt ("introduce un numero")
    if (num > 0){
    counter++
    }
    count++
}
alert(`total hay ${counter} numero es positivo`)