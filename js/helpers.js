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


export function resumenValidaciones(inputNombre, inputApellido, inputEmail, inputTelefono, inputAnio, inputDesc) {
    let resumen = "";
    // Validar Nombre
    if (!validarCantidadCaracteres(inputNombre, 2, 30)) {
        resumen +=  `El nombre debe contener entre 2 y 30 caracteres.\n`
    } else {
        resumen = "";
    }
    // Validar Apellido
    if (!validarCantidadCaracteres(inputApellido, 2, 30)) {
        resumen +=  `El apellido debe contener entre 2 y 30 caracteres.\n`;
    } else {
        resumen = "";
    }
    // Validar Email
    if (!validarEmail(inputEmail)) {
        resumen +=  `Debe ingresar un correo electrónico válido.\n`;
    } else {
        resumen = "";
    }
    // Validar Teléfono
    if (!validarTelefono(inputTelefono)) {
        resumen +=  `Debe ingresar un teléfono válido (10 dígitos).\n`;
    } else {
        resumen = "";
    }
    // Validar Año
    if (!validarAnio(inputAnio)) {
        resumen += `Debe ingresar un año entre 1900 y 2024.\n`;
    } else {
        resumen = "";
    }
    // Validar Marca
    if (!validarSelect(selectMarca)) {
        resumen +=  `Debe seleccionar una marca.\n`;
    } else {
        resumen = "";
    }
    // Validar Modelo
    if (!validarSelect(selectModelo)) {
        resumen +=  `Debe seleccionar un modelo.\n`;
    } else {
        resumen = "";
    }
    return resumen
}