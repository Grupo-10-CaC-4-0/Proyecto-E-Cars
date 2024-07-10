function validarCantidadCaracteres(cadena, min, max) {
    if (cadena.length >= min && cadena.length <= max) {
        return true;
    } else {
        return false;
    }
}
function validarEmail(email) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(String(email).toLowerCase());
}

function validarTelefono(telefono) {
    return /^[0-9]{10}$/.test(telefono);
}

function validarAnio(anio) {
    const year = parseInt(anio);
    if (year >= 1900 && year <= 2024) {
        return true;
    } else {
        return false;
    }
}

function validarSelect(select) {
    if (select.value !== "") {
        return true;
    } else {
        return false;
    }
}
function validarRadio(nombreRadios) {
    const radios = document.getElementsByName(nombreRadios);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    return false;
}

export function resumenValidacionesContacto(inputNombre, inputApellido, inputEmail, inputTelefono, selectMarca, selectModelo, inputAnio, inputDesc, nombreRadios) {
    let resumen = "";
    if (!validarCantidadCaracteres(inputNombre, 2, 30)) {
        resumen += "El <strong>nombre</strong> debe contener <strong>entre 2 y 30 caracteres</strong>.<br>"
    }
    if (!validarCantidadCaracteres(inputApellido, 2, 30)) {
        resumen += "El <strong>apellido</strong> debe contener <strong>entre 2 y 30 caracteres</strong>.<br>";
    }
    if (!validarEmail(inputEmail)) {
        resumen += "Debe ingresar un <strong>correo electrónico válido</strong>.<br>";
    }
    if (!validarTelefono(inputTelefono)) {
        resumen += "Debe ingresar un <strong>teléfono válido (10 dígitos)</strong>.<br>";
    }
    if (!validarAnio(inputAnio)) {
        resumen += "Debe ingresar un <strong>año entre 1900 y 2024</strong>.<br>";
    }
    if (!validarSelect(selectMarca)) {
        resumen += "Debe seleccionar <strong>una marca</strong>.<br>";
    }
    if (!validarSelect(selectModelo)) {
        resumen += `Debe seleccionar <strong>un modelo.</strong>.<br>`;
    }
    if (!validarCantidadCaracteres(inputDesc, 0, 500)) {
        resumen += "El <strong>nombre</strong> debe contener <strong>entre 2 y 30 caracteres</strong>.<br>"
    }
    if (!validarRadio(nombreRadios)) {
        resumen += "Debe seleccionar <strong>un tipo de vehículo</strong>.<br>";
    }
    return resumen
}
export function resumenValidacionesVehiculo(inputNombre, inputApellido, inputEmail, inputTelefono, selectMarca, selectModelo, inputAnio, inputDesc, nombreRadios) {
    let resumen = "";
    if (!validarAnio(inputAnio)) {
        resumen += "Debe ingresar un <strong>año entre 1900 y 2024</strong>.<br>";
    }
    if (!validarCantidadCaracteres(inputDesc, 0, 500)) {
        resumen += "El <strong>detalle del modelo</strong> debe contener <strong>entre 2 y 30 caracteres</strong>.<br>"
    }
    if (!validarRadio(nombreRadios)) {
        resumen += "Debe seleccionar <strong>un tipo de vehículo</strong>.<br>";
    }
    return resumen
}