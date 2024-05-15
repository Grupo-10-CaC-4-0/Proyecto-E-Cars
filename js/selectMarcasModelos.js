const datosSelectVehiculos = {
    Audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT'],
    BMW: ['Serie 1', 'Serie 2', 'Serie 3', 'Serie 4', 'Serie 5', 'Serie 7', 'Serie 8', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Z4'],
    Chevrolet: ['Cruze', 'Equinox', 'Malibu', 'Sonic', 'Spark', 'Suburban', 'Tahoe', 'Traverse'],
    Fiat: ['Argo', 'Cronos', 'Fastback', 'Mobi', 'Pulse Abarth', 'Strada', 'Toro'],
    Ford: ['Edge', 'Escape', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Mustang'],
    Honda: ['Accord', 'Civic', 'CR-V', 'Fit', 'HR-V', 'Jazz'],
    Jeep: ['Commander', 'Compass', 'Gladiator', 'Grand Cherokee', 'Renegade', 'Wrangler'],
    Mercedes: ['Clase A', 'Clase B', 'Clase C', 'Clase E', 'Clase S', 'GLA', 'GLC', 'GLE', 'GLS'],
    Nissan: ['Frontier', 'Kicks', 'Sentra', 'Versa', 'X-Trail'],
    Peugeot: ['2008', '208', '3008', '4008', '408', '5008', 'Expert', 'Partner', 'Rifter'],
    Renault: ['Alaskan', 'Duster', 'Kangoo Stepway', 'Kwid E-Tech', 'Logan', 'Sandero', 'Stepway'],
    Toyota: ['Auris', 'Camry', 'Corolla', 'Highlander', 'Hilux', 'Land Cruiser', 'RAV4', 'Yaris'],
    Volkswagen: ['Amarok', 'Gol', 'Nivus', 'Polo', 'T-Cross', 'Taos', 'Virtus']
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
