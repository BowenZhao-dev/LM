`use strict`;
let resu = 0
let num
let media
let count = -1
while ( num != 0) {
    count++
    num=Number(prompt("introduce notas que quiere calcular media"))
    resu=num+resu
}
    media=resu/count
    alert(`la media de los ${count} valor es ${media} `)