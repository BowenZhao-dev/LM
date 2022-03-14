'use strict';
//mutiplicar por suma
//division por restar
let num1
let num2
let option
let res = 0
let z = 0
 while ( option != 3 ) {
    option = prompt("Menu:" + "\n1.mutiplicar\n2.division\n3.exit\nintroduce un option")  
    if ( option == 1 ){
    num1=Number(prompt("multiplica\nintroduce un numero"))
    num2=Number(prompt("introduce otro numero"))
    for (let i = 0; i < num2; i++) {
      res=num1+res
    }   
     alert(`${num1} por ${num2} es ${res}`)
     res=0
    }
    else if ( option == 2 ){
        num1=Number(prompt("division\nintroduce un numero"))
        num2=Number(prompt("introduce otro numero"))
        let i = 0
        let x = 0
        if(num1 >= num2){
        while (num1 >= num2){
          num1=num1-num2
          i++
        }   
         alert(`resultado es ${i} resto es ${num1}`)
        }
        else if( num1 < num2){
          let num3
          /*res= num1 / num2*/
          num3=`${num1}`+`${z}`
          while (num3 >= num2){
            num3=num3-num2
            x++
          } 
          if(num3 < num2){
             let num4
             num4=`${num3}`+`${z}`
             while (num4 >= num2){
               num4=num4-num2
               i++
             }
             alert(`0.`+`${x}`+`${i}`)   
          }  
        }
        }
    else if( option == 3)
    {
        alert("salir de menu")
    }
    else if (option != Range[1,3]){
        alert("introduce un valor valido")
    }
 }
 