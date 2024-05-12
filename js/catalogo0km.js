
// -------> datos de 0km destacados <------- 

let destacados0km = [
    {
        marca: "Fiat",
        modelo: "Pulse Abarth",
        segmento: "Hatchback",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-fiat-pulse-abarth.jpg",
    },
    {
        marca: "Renault",
        modelo: "kangoo Stepway",
        segmento: "Utilitario",
        combustible: "Nafta",
        transmisión: "Manual",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-kangoo-step.jpg" ,
    },
    {
        marca: "Nissan",
        modelo: "Frontier",
        segmento: "Pick Up",
        combustible: "Diesel",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-nissan-frontier.jpg" ,
    },
    {
        marca: "Peougeot",
        modelo: "208",
        segmento: "Hatchback",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-peugeot-208.jpg" ,
    },
    {
        marca: "Renault",
        modelo: "Kwid E-Tech",
        segmento: "Hatchback",
        combustible: "Electrico",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-kwid-etech.jpg" ,
    },
    {
        marca: "Volskwagen",
        modelo: "Amarok",
        segmento: "Pick Up",
        combustible: "Diesel",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-vw-amarok.jpg" ,
    },
    {
        marca: "Fiat",
        modelo: "Fastback",
        segmento: "Suv",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-fiat-fastback.jpg" ,
    },
    {
        marca: "Jeep",
        modelo: "Fastback",
        segmento: "Suv",
        combustible: "Nafta",
        transmisión: "Manual",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-jeep-renegade.jpg" ,
    }
    ]
// -------> cargar tarjetasa de autos destacados <------- 

var card = document.querySelector(".loop0km");

function lookcards() {

    for (e of destacados0km) {
        let imagen = new Image();
        imagen.src = e.imagensrc;

        card.innerHTML += "<div class='card0km'> <div><img src=" + imagen.src + " alt=''></div>" + "<div> <div class='titcard0km'>"+e.marca+" "+e.modelo+"</div> <div><ul> <li class='kmcard'>Kilometraje: "+e.km+"km</li> <li class='combuscard'>Combustible: "+e.combustible+"</li> <li class='transmisioncard'>Transmisión: "+e.transmisión+"</li> </ul></div> </div>" +"</div>";

    }
}

// -------> datos de todos los 0km <-------


let autos0km = [
    {
        marca: "Fiat",
        modelo: "Pulse Abarth",
        segmento: "Hatchback",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-fiat-pulse-abarth.jpg",
    },
    {
        marca: "Renault",
        modelo: "kangoo Stepway",
        segmento: "Utilitario",
        combustible: "Nafta",
        transmisión: "Manual",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-kangoo-step.jpg" ,
    },
    {
        marca: "Nissan",
        modelo: "Frontier",
        segmento: "Pick Up",
        combustible: "Diesel",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-nissan-frontier.jpg" ,
    },
    {
        marca: "Peougeot",
        modelo: "208",
        segmento: "Hatchback",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-peugeot-208.jpg" ,
    },
    {
        marca: "Renault",
        modelo: "Kwid E-Tech",
        segmento: "Hatchback",
        combustible: "Electrico",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-kwid-etech.jpg" ,
    },
    {
        marca: "Volskwagen",
        modelo: "Amarok",
        segmento: "Pick Up",
        combustible: "Diesel",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-vw-amarok.jpg" ,
    },
    {
        marca: "Fiat",
        modelo: "Fastback",
        segmento: "Suv",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-fiat-fastback.jpg" ,
    },
    {
        marca: "Jeep",
        modelo: "Renegade",
        segmento: "Suv",
        combustible: "Nafta",
        transmisión: "Manual",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-jeep-renegade.jpg" ,
    },
    {
        marca: "Jeep",
        modelo: "Compass",
        segmento: "Suv",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-jeep-compass.jpg" ,
    }
    ,
    {
        marca: "Jeep",
        modelo: "Commander",
        segmento: "Suv",
        combustible: "Diesel",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-jeep-commander.jpg" ,
    }
    ,
    {
        marca: "Nissan",
        modelo: "Sentra",
        segmento: "Sedán",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-nissan-sentra.jpg" ,
    }
    ,
    {
        marca: "Volkswagen",
        modelo: "Virtus",
        segmento: "Sedán",
        combustible: "Nafta",
        transmisión: "Manual",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-vw-virtus.jpg" ,
    }
    ,
    {
        marca: "Fiat",
        modelo: "Cronos",
        segmento: "Sedán",
        combustible: "Nafta",
        transmisión: "Automático",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-fiat-cronos.jpg" ,
    }
    ,
    {
        marca: "Renault",
        modelo: "Logan",
        segmento: "Sedán",
        combustible: "Nafta",
        transmisión: "Manual",
        km: "0",
        imagensrc: "/img/catalog_0km/mini-renault-logan.jpg" ,
    }    

    ]
