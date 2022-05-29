
loadLDocA("txt.txt")

function gestionarFicheroTXT(txtDoc)
{
    let txt = txtDoc.split("\n")
    let cadena = ""
    let main = document.querySelector("div")
    
    cadena += "<table>"
    for(let i=0; i<txt.length; i++)
    {
        cadena += "<tr>"
        cadena += "<td>"
        cadena += "<h3>" + txt[i] + "</h3>"
        cadena += "</td>"
        cadena += "</tr>"
    }
    cadena += "</table>"

    
    main.innerHTML = cadena;
}
