import { resumenValidacionesVehiculo } from "./helpers.js";

let formVehiculo = document.getElementById("formVehiculo")
let alertaErrores = document.getElementById("alertaErrores")

let inputMarca = document.getElementById("inputMarca")
let inputModelo = document.getElementById("inputModelo")
let inputAnio = document.getElementById("inputAnio")
let inputModeloDetalle = document.getElementById("inputModeloDetalle")
let inputKms = document.getElementById("inputKms")
let inputPrecio = document.getElementById("inputPrecio")
let inputRutaImagen = document.getElementById("inputRutaImagen")
let radiotipoVehiculo = "tipoVehiculo";

formVehiculo.addEventListener("submit", obtenerDato);

function obtenerDato(e) {
    e.preventDefault();

    const resumen = resumenValidacionesVehiculo(inputMarca.value, inputModelo.value, inputAnio.value, inputModeloDetalle.value, radiotipoVehiculo)
    mostrarMensajesError(resumen);
    if (resumen.length === 0) {
        mostrarModal();
        formVehiculo.reset();
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
function mostrarModal() {
    const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
    modalExito.show();
}
