// console.log("correcto");
let canciones = document.getElementById("canciones");

// document.querySelector("#top_3").addEventListener("click", traerDatosTop3());

function traerDatosCanciones() {
    // console.log("dentro de la funcion");
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "datos.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            function ordenarPorClave(array, key) {
                for (let g = 0; g < 3; g++) {
                    let f = 0 + g;
                    return array.sort(function(a, b) {
                        var x = a[key];
                        var y = b[key];
                        return x > y ? -1 : x < y ? 1 : 0;
                    });
                }
            }
            datos = ordenarPorClave(datos.canciones, "reproducciones");

            const busc = document.querySelector("#buscador");
            const boton = document.querySelector("#boton");
            const can = document.querySelector("#canciones");
            const filtrar = () => {
                can.innerHTML = "";
                const text = busc.value.toLowerCase();

                for (a = 0; a < datos.length; a++) {
                    let nombre = datos[a].nombre.toLowerCase();

                    console.log(can);
                    // console.log(datoslet can = document.createElement("div"););
                    if (nombre.indexOf(text) !== -1) {
                        const can = document.createElement("div");
                        can.innerHTML = "";
                        can.innerHTML += `<div class="card-contenido-banner">
                            <div class="caja-cancion">
                                <div class="color">
                                    <img class="imagen " src="./imagenes/${datos[a].icono}" alt="">
                                </div>
                                <div class="audios "  id="audios">
                                    <h2 class="titulo-canciones">${datos[a].nombre}</h2>
                                    <audio src="canciones/${datos[a].ruta}" id ="audios"preload="auto" controls></audio>
                                </div>
                            </div>
                        </div>`;
                        canciones.appendChild(can);
                    }
                }

                if (can.innerHTML === "") {
                    can.innerHTML = `

                        <div class="card-header"> 
                        <span class ="error"> La canción  que busca No exite.. Intenta nuevamente </span>
                        </div>

                `;
                }
            };

            busc.addEventListener("keyup", filtrar);
            filtrar();
        }
    };
}
traerDatosCanciones();