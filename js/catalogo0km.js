
// -------> datos de 0km <------- 

let autos0km = [
        {
            marca: "Fiat",
            modelo: "Pulse Abarth",
            segmento: "Hatchback",
            combustible: "nafta",
            transmisión: "automatica",
            km: "0",
            imagen: { src: "/img/catalog_0km/mini-fiat-pulse-abarth.jpg"},
        },
        {
            marca: "Renault",
            modelo: "kangoo Stepway",
            segmento: "Utilitario",
            combustible: "nafta",
            transmisión: "manual",
            km: "0",
            imagen: { src: "/img/catalog_0km/mini-kangoo-step.jpg"},
        },
        {
            marca: "Nissan",
            modelo: "Frontier",
            segmento: "Pick Up",
            combustible: "diesel",
            transmisión: "automatica",
            km: "0",
            imagen: {src: "/img/catalog_0km/mini-nissan-frontier.jpg"},
        },
        {
            marca: "Peougeot",
            modelo: "208",
            segmento: "Hatchback",
            combustible: "nafta",
            transmisión: "automatica",
            km: "0",
            imagen: {src:"/img/catalog_0km/mini-peugeot-208.jpg"},
        },
        {
            marca: "Renault",
            modelo: "Kwid E-Tech",
            segmento: "Hatchback",
            combustible: "electrico",
            transmisión: "automatica",
            km: "0",
            imagen:{src:"/img/catalog_0km/mini-kwid-etech.jpg"},
        },
        {
            marca: "Volskwagen",
            modelo: "Amarok",
            segmento: "Pick Up",
            combustible: "diesel",
            transmisión: "automatica",
            km: "0",
            imagen:{src: "/img/catalog_0km/mini-vw-amarok.jpg"},
        }
    ]
// -------> funcion de prueba para loop <------- 

var card = document.querySelector(".cardprueba");



function saludar() {

    // for (var i = 0; i < autos0km.length; i++) {
    //     card.innerHTML = "<div><img src="+autos0km[i].imagen.src+"> </div>";
    // }

    
    for (const e of autos0km) {
        let imagen = new Image();
        imagen.src = e.imagen.src;
        marca0 = e.marca;
        card.innerHTML = "<div><img src="+imagen.src+"> </div>";
        console.log(marca0);
    }

}

