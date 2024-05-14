const datosSelectVehiculos = {
    BMW: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Serie 1', 'Serie 2', 'Serie 3', 'Serie 4', 'Serie 5', 'Serie 7', 'Serie 8', 'Z4'],
    Audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT'],
    Mercedes: ['Clase A', 'Clase B', 'Clase C', 'Clase E', 'Clase S', 'GLA', 'GLC', 'GLE', 'GLS'],
    Toyota: ['Corolla', 'Yaris', 'Auris', 'Camry', 'RAV4', 'Highlander', 'Land Cruiser', 'Hilux'],
    Honda: ['Civic', 'Accord', 'CR-V', 'HR-V', 'Fit', 'Jazz'],
    Ford: ['Fiesta', 'Focus', 'Mustang', 'Explorer', 'Escape', 'Edge', 'F-150'],
    Chevrolet: ['Spark', 'Sonic', 'Cruze', 'Malibu', 'Equinox', 'Traverse', 'Tahoe', 'Suburban']
};

let selectMarcas = document.getElementById("selectMarca");
let selectModelos = document.getElementById("selectModelo")

function agregarOpciones(select, arrayDatos) {
    arrayDatos.forEach(dato => {
        const opcionSelect = document.createElement('option');
        opcionSelect.value = dato;
        opcionSelect.textContent = dato;
        select.appendChild(opcionSelect);
    });
}

function actualizarSelect() {
    const opcionSeleccionada = selectMarcas.value;
    selectModelos.innerHTML = `<option selected disabled hidden>Seleccione un modelo...</option>`;
    if (opcionSeleccionada) {
        const opcionesModelos = datosSelectVehiculos[opcionSeleccionada];
        agregarOpciones(selectModelos, opcionesModelos);
    }
}

agregarOpciones(selectMarcas, Object.keys(datosSelectVehiculos));

selectMarcas.addEventListener('change', actualizarSelect); 
