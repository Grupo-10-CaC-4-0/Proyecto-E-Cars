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
    if (year > 1900 && year <= 2024) {
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
function validarURL(url) {
    const pattern = /^(https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|JPG|JPEG|PNG|GIF|BMP|WEBP))$/;
    return pattern.test(url);
}
function validarNumeroPositivo(numero) {
    return /^[0-9]+$/.test(numero);
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
        resumen += "Debe ingresar un <strong>año entre 1901 y 2024</strong>.<br>";
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
export function resumenValidacionesVehiculo(marca, modelo, anio, kms, precio, rutaImagen, modeloDetalle, tipoVehiculo) {
    let resumen = "";
    
    if (!validarCantidadCaracteres(marca, 1, 30)) {
        resumen += "La <strong>marca</strong> debe contener entre 1 y 30 caracteres.<br>";
    }
    if (!validarCantidadCaracteres(modelo, 1, 30)) {
        resumen += "El <strong>modelo</strong> debe contener entre 1 y 30 caracteres.<br>";
    }
    if (!validarAnio(anio)) {
        resumen += "Debe ingresar un <strong>año entre 1901 y 2024</strong>.<br>";
    }
    if (!validarNumeroPositivo(kms)) {
        resumen += "Debe ingresar un número válido para los <strong>kilómetros</strong>.<br>";
    }
    if (!validarNumeroPositivo(precio)) {
        resumen += "Debe ingresar un número válido para el <strong>precio</strong>.<br>";
    }
    if (!validarURL(rutaImagen)) {
        resumen += "Debe ingresar una <strong>URL válida</strong> para la imagen.<br>";
    }
    if (!validarCantidadCaracteres(modeloDetalle, 0, 500)) {
        resumen += "El <strong>detalle del modelo</strong> debe contener entre 0 y 500 caracteres.<br>";
    }
    if (!validarRadio(tipoVehiculo)) {
        resumen += "Debe seleccionar un <strong>tipo de vehículo</strong>.<br>";
    }
    return resumen;
}