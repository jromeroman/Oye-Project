// console.log("correcto");
let cancionestop = document.getElementById("top-general");

// document.querySelector("#top_3").addEventListener("click", traerDatosTop3());

function traerDatosTop3() {
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

            for (a = 0; a < 3; a++) {
                console.log(datos);
                let can = document.createElement("div");
                can.innerHTML = `
                <div class="banner2 banner">
                    <div class="top-3">
                        <div class="canciones-top3 canciones ">
                            <div class="canciones">
                                <h2 class="text-blue">${datos[a].nombre}</h2>
                                <audio class="audiocanciones" src="canciones/${datos[a].ruta}" preload="auto" controls></audio>
                            </div>
                            <div class="canciones">
                            </div>
                        </div>
                         <hr>
                    </div>
                    
                    </div>
                   
                    
                    
                `;
                cancionestop.appendChild(can);
            }
        }
    };
}
traerDatosTop3();