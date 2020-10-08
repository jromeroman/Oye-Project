function limpiarErrores() {
    var errores = document.getElementsByClassName("error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}

function validar(formulario) {
    limpiarErrores();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText = "Email inválido";
        formulario.email.focus();
        return false;
    }
    if (formulario.contrasena.value.trim().length == 0) {
        document.getElementById("errorContrasena").innerText =
            "Campo obligatorio";
        formulario.contrasena.focus();
        return false;
    }
    if (formulario.contrasena.value.trim().length < 8) {
        document.getElementById("errorContrasena").innerText =
            "Contraseña inválida,(mínimo 8 caracteres)";
        formulario.contrasena.focus();
        return false;
    }
    if (formulario.contrasena.value != formulario.confirmacion.value) {
        document.getElementById("errorConfirmacion").innerText =
            "Confirmación no coincide con la contraseña";
        formulario.confirmacion.focus();
        return false;
    }
    if (formulario.musica.value == "") {
        document.getElementById("errorGenero").innerText =
            "Debes selecionar un género";
        formulario.pais.focus();
        return false;
    }
    if (formulario.edad.value == "") {
        document.getElementById("errorEdad").innerText =
            "Debes selecionar una rango de edad";
        return false;
    }
    if (!formulario.terminos.checked) {
        document.getElementById("errorTerminos").innerText =
            "Debes aceptar los términos";
        formulario.terminos.focus();
        return false;
    }
    alert("Datos enviados");
    return true;
}