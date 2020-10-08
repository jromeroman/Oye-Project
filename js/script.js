function arr() {
    [1, 4, 2, 6, 8, 4]
    var int = 3

    for (a = 0; a > int; a++) {

    }
    console.log(arr)

}
arr()




function cargarDatos() {
    var peticion = new XMLHttpRequest();
    // peticion.open('GET', 'datos.json');
    peticion.open("GET", "http://127.0.0.1:5500/datos.json");
    peticion.onload = function() {
        for (var i = 1;)
        // if (peticion.reproducciones == 0) {
        // 	// console.log('peticion.response: ', peticion.response);
        // 	var datos = JSON.parse(peticion.response);
        // 	// console.log('datos: ', datos);
        // 	document.getElementById("contenido").innerHTML =
        // 		"Hola: " + datos.nombre;
        // }
    };
    peticion.send();
}

// // / prueba();
// function canciones() {
//     const URL = "http://localhost:4000";
//     fetch(`${URL}/canciones`)
//         .then((res) => {
//             return res.json();
//             // console.log(res)
//         })
//         .then((resultado) => {
//             console.log(resultado.reproducciones);
//         });
// }

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log("Json parsed data is: " + JSON.stringify(myObj));
    }
};
xmlhttp.open("GET", "datos.json", true);
xmlhttp.send();