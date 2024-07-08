import { resumenValidaciones } from "./helpers.js";

let formVehiculo = document.getElementById("formVehiculo")
let alertaErrores = document.getElementById("alertaErrores")

let selectMarca = document.getElementById("selectMarca")
let selectModelo = document.getElementById("selectModelo")
let inputAnio = document.getElementById("inputAnio")
let inputDesc = document.getElementById("inputDesc")
let radiotipoVehiculo = "tipoVehiculo";

formVehiculo.addEventListener("submit", obtenerDato);

function obtenerDato(e) {
    e.preventDefault();

    const resumen = resumenValidaciones(selectMarca, selectModelo, inputAnio.value, inputDesc.value, radiotipoVehiculo)
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
