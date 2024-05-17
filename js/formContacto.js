import { resumenValidaciones } from "./helpers.js";

let formContacto = document.getElementById("formContacto")
let alertaErrores = document.getElementById("alertaErrores")

let inputNombre = document.getElementById("inputNombre")
let inputApellido = document.getElementById("inputApellido")
let inputEmail = document.getElementById("inputEmail")
let inputTelefono = document.getElementById("inputTelefono")
//Ver inputs tipo radio
let selectMarca = document.getElementById("selectMarca")
let selectModelo = document.getElementById("selectModelo")
let inputAnio = document.getElementById("inputAnio")
let inputDesc = document.getElementById("inputDesc")

formContacto.addEventListener("submit", obtenerDato);

function obtenerDato(e) {
    e.preventDefault();

    const resumen = resumenValidaciones(inputNombre.value, inputApellido.value, inputEmail.value, inputTelefono.value, inputAnio.value, inputDesc.value)
    mostrarMensajesError(resumen);
    if (resumen.length === 0) {
        console.log("Se ha enviado el Form")
        formContacto.reset();
    }
}
function mostrarMensajesError(resumen) {

    if (resumen.length > 0) {
        alertaErrores.className = "alert alert-danger mt-3"
        alertaErrores.innerHTML = resumen
    } else {
        alertaErrores.className = "alert alert-danger mt-3 d-none"
    }
}