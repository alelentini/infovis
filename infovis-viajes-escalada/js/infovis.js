
/*--------------------------------------------------------------------------------------------------------*/
// Data
/*--------------------------------------------------------------------------------------------------------*/

// Climbing trips dataset
var ds = [
    {'Fecha': '2013-03-01', 'Año': 2013, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 950},
    {'Fecha': '2013-05-12', 'Año': 2013, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 928},
    {'Fecha': '2013-10-13', 'Año': 2013, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 995},
    {'Fecha': '2013-11-17', 'Año': 2013, 'Provincia': 'Buenos Aires', 'Escuela': 'Picapedrero', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 836},
    {'Fecha': '2013-12-08', 'Año': 2013, 'Provincia': 'Buenos Aires', 'Escuela': 'Picapedrero', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 836},
    {'Fecha': '2014-02-01', 'Año': 2014, 'Provincia': 'Córdoba', 'Escuela': 'Gigantes', 'Tipo': 'Tradicional / Deportiva', 'Transporte': 'Auto', 'Km': 1600},
    {'Fecha': '2014-06-01', 'Año': 2014, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 960},
    {'Fecha': '2014-08-17', 'Año': 2014, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 961},
    {'Fecha': '2014-09-01', 'Año': 2014, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 961},
    {'Fecha': '2014-10-01', 'Año': 2014, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 961},
    {'Fecha': '2015-03-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'La Barrosa', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 920},
    {'Fecha': '2015-04-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 950},
    {'Fecha': '2015-05-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 950},
    {'Fecha': '2015-06-07', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 1010},
    {'Fecha': '2015-07-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 1010},
    {'Fecha': '2015-08-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'Tres Picos', 'Tipo': 'Tradicional', 'Transporte': 'Auto', 'Km': 1200},
    {'Fecha': '2015-10-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 950},
    {'Fecha': '2015-11-01', 'Año': 2015, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 957},
    {'Fecha': '2015-12-13', 'Año': 2015, 'Provincia': 'Mendoza', 'Escuela': 'Arenales', 'Tipo': 'Tradicional / Deportiva', 'Transporte': 'Auto', 'Km': 2433},
    {'Fecha': '2016-01-24', 'Año': 2016, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 923},
    {'Fecha': '2016-05-08', 'Año': 2016, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 873},
    {'Fecha': '2016-05-29', 'Año': 2016, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 952},
    {'Fecha': '2016-06-12', 'Año': 2016, 'Provincia': 'Córdoba', 'Escuela': 'Gigantes', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 1640},
    {'Fecha': '2016-06-12', 'Año': 2016, 'Provincia': 'Córdoba', 'Escuela': 'Capilla del Monte', 'Tipo': 'Tradicional / Deportiva', 'Transporte': 'Micro + Auto', 'Km': 1640},
    {'Fecha': '2016-08-14', 'Año': 2016, 'Provincia': 'Buenos Aires', 'Escuela': 'La Vigilancia', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 994},
    {'Fecha': '2016-10-30', 'Año': 2016, 'Provincia': 'Chubut', 'Escuela': 'Piedra Parada', 'Tipo': 'Deportiva', 'Transporte': 'Avión + Auto', 'Km': 1700},
    {'Fecha': '2016-10-30', 'Año': 2016, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 1125},
    {'Fecha': '2016-12-08', 'Año': 2016, 'Provincia': 'Mendoza', 'Escuela': 'Arenales / La Frazada', 'Tipo': 'Deportiva', 'Transporte': 'Micro + Auto', 'Km': 2800},
    {'Fecha': '2017-04-16', 'Año': 2017, 'Provincia': 'Mendoza', 'Escuela': 'Arenales / El Santuario', 'Tipo': 'Tradicional / Deportiva', 'Transporte': 'Auto', 'Km': 2808},
    {'Fecha': '2017-04-30', 'Año': 2017, 'Provincia': 'Buenos Aires', 'Escuela': 'Difuntos', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 1031},
    {'Fecha': '2019-09-14', 'Año': 2019, 'Provincia': 'Buenos Aires', 'Escuela': 'Picapedrero / Nogales', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 830},
    {'Fecha': '2019-10-01', 'Año': 2019, 'Provincia': 'Chubut', 'Escuela': 'Piedra Parada', 'Tipo': 'Deportiva', 'Transporte': 'Avión + Auto', 'Km': 1700},
    {'Fecha': '2019-10-13', 'Año': 2019, 'Provincia': 'Buenos Aires', 'Escuela': 'Picapedrero', 'Tipo': 'Deportiva', 'Transporte': 'Auto', 'Km': 830}
];


/*--------------------------------------------------------------------------------------------------------*/
// Functions
/*--------------------------------------------------------------------------------------------------------*/

// Initializes DP application -> Called by onload event 
function initVis() {

    createTimeline();
}


function createTimeline() {

    var i;
    var j;
    var data = [];
    var options = {orientation: {axis: 'both'}};

    j = ds.length;
    for(i = 0; i < j; i++) {
        data.push({
            id: i + 1, 
            content: '<div class="text-left"><span style="font-weight:bold">' + ds[i].Escuela + '</span>, ' + 
                     '<em>' + ds[i].Provincia + '</em><br>' +
                     'Viaje ' + (i + 1) + ', ' + ds[i].Tipo + '<br>' +
                     transportIcon(ds[i].Transporte) + ' ' + ds[i].Km + 'Km</div>', 
            start: ds[i].Fecha,
            className: 'ti-' + provinciaId(ds[i].Provincia)
        });
    }
    timeline = new vis.Timeline(document.getElementById('timeline'), new vis.DataSet(data), options);
}


function provinciaId(prov) {

    switch (prov) {
        case 'Buenos Aires':
            return 1;
            break;
        case 'Córdoba':
            return 2;
            break;
        case 'Mendoza':
            return 3;
            break;
        case 'Chubut':
            return 4;
            break;
    }
}


function transportIcon(transport) {

    switch(transport) {
        case 'Auto':
            return '&#128663;';
            break;
        case 'Micro + Auto':
            return '&#128652; + &#128663;';
            break;
        case 'Avión + Auto':
            return '&#9992; + &#128663;';
            break;
    }
}