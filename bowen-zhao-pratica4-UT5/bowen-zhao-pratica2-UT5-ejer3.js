let age
const agearray = []
let i = 0

while( age != 0 )
{
    age = prompt("introduce un edad 1-150 0 para salir")
    if( age < 0 )
    {
        alert("introduce un valor valido")
    }
    else if (age > 150)
    {
        alert("introduce un valor valido")
    }
    else if( age == 0 )
    {
        alert("exit")
    }
    else
    {
        agearray.push(age)
    }
 
}
for (let index = 0; index < agearray.length; index++) {

if(agearray[index]<18){
    console.log(agearray[index]+" anyo es menor")
}
else if(agearray[index] >= 18 && agearray[index] < 65 ){
    console.log(agearray[index]+ " anyo es adulto")
}
else if(agearray[index]>=65){
    console.log(agearray[index]+ " anyo es jubilado")
}
}