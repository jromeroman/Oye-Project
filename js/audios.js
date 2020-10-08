// // console.log("correcto");

// document
//     .querySelector("#caudios")
//     .addEventListener("click", traerDatosaudios());

// function traerDatosaudios() {
//     // console.log("dentro de la funcion");
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "datos.json", true);
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // console.log(this.responseText);
//             let datos = JSON.parse(this.responseText);
//             // console.log(datos.nombre);

//             for (let c = 1; c < 10; c++) {
//                 let d = 0 + c;
//                 let res = document.querySelector("#a" + c);
//                 res.innerHTML = "";

//                 for (let item of datos) {
//                     if (item.id == c) {
//                         console.log(item.ruta);
//                         res.innerHTML += ` <audio src="./canciones/${item.ruta}"  controls></audio>
//                     `;
//                     }
//                 }
//             }
//         }
//     };
// }