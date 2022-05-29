`use strict`

loadLDocA("libros.xml")
    
function gestionarFicheroXML(xml)
{
    let main = document.querySelector("main");
    let libro = xml.querySelectorAll("libro");
    let libreria = xml.querySelectorAll("libreria");
    let cadena = "";
        for (let q = 0; q < libreria.length; q++) {
            cadena += "<table><tr>"
            
                 cadena += "<h3>" + libreria[q].querySelector("nombre").textContent + "</h3>"
                 cadena += "</tr>"
                 let libro = libreria[q].querySelectorAll("libro");
        for (let i = 0; i < libro.length; i++) {
                 
                 cadena += "<tr>"
                 cadena += "</td>"+"<td>" + libro[i].querySelector("ISBN").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("titulo").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("nivelProfundidad").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("autores").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("editorial").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("fechaPublicacion").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("paginaWeb").textContent + "</td>"
                 cadena += "<td>" + libro[i].querySelector("precio").textContent + "</td>"
                 cadena += "</tr>"

    }
}
    main.innerHTML += cadena + "</table>"   
}

