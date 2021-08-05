const autos_url = "https://nicozucco.github.io/listado/listado.json"; /*constante que define url al listado json*/

document.addEventListener('DOMContentLoaded', function () { /*hace que cuando el documento termine de cargar contenido, se ejecute la funcion*/
        
    document.getElementById("info").innerHTML = "";

    fetch(autos_url) /*llama la url definida arriba*/

        .then(respuesta => respuesta.json()) /*llama al json */

        .then(datos => {
          
            datos.forEach(datos => {/*revisa cada variable para devolver la informacion*/
                            
            let row = "";
            row = `
                <tr>
                    <td> ` + datos.marca + ` </td>
                    <td> ` + datos.modelo + ` </td>
                    <td> ` + datos.color + `</td>
                    <td> ` + datos.puertas + `</td>
                </tr>
                `;
            
            document.getElementById("info").innerHTML += row; /*agrega la informacion a la tabla */
        });
})

           .catch (error => alert("Hubo un error: " + error)); /*Si algo no funciona, lanza una alerta mostrando donde esta el error*/
        
    })