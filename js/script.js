var map = L.map('map', {
    center: [7.3, 12.3],
    zoom: 6
});

var defaultLayer = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

// base layers
var baseLayers = {
    'OpenStreetMap Default': defaultLayer,
    'OpenStreetMap German Style': L.tileLayer.provider('OpenStreetMap.DE'),
    'OpenStreetMap Black and White': L.tileLayer.provider('OpenStreetMap.BlackAndWhite'),
    'OpenStreetMap H.O.T.': L.tileLayer.provider('OpenStreetMap.HOT'),
    'Thunderforest OpenCycleMap': L.tileLayer.provider('Thunderforest.OpenCycleMap'),
    'Thunderforest Transport': L.tileLayer.provider('Thunderforest.Transport'),
    'Thunderforest Landscape': L.tileLayer.provider('Thunderforest.Landscape'),
    'Hydda Full': L.tileLayer.provider('Hydda.Full'),
    'Stamen Toner': L.tileLayer.provider('Stamen.Toner'),
    'Stamen Terrain': L.tileLayer.provider('Stamen.Terrain'),
    'Stamen Watercolor': L.tileLayer.provider('Stamen.Watercolor'),
    'Esri WorldStreetMap': L.tileLayer.provider('Esri.WorldStreetMap'),
    'Esri DeLorme': L.tileLayer.provider('Esri.DeLorme'),
    'Esri WorldTopoMap': L.tileLayer.provider('Esri.WorldTopoMap'),
    'Esri WorldImagery': L.tileLayer.provider('Esri.WorldImagery'),
    'Esri WorldTerrain': L.tileLayer.provider('Esri.WorldTerrain'),
    'Esri WorldShadedRelief': L.tileLayer.provider('Esri.WorldShadedRelief'),
    'Esri WorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
    'Esri OceanBasemap': L.tileLayer.provider('Esri.OceanBasemap'),
    'Esri NatGeoWorldMap': L.tileLayer.provider('Esri.NatGeoWorldMap'),
    'Esri WorldGrayCanvas': L.tileLayer.provider('Esri.WorldGrayCanvas'),
    'Geoportail France Maps': L.tileLayer.provider('GeoportailFrance'),
    'Geoportail France Orthos': L.tileLayer.provider('GeoportailFrance.orthos'),
    'Geoportail France classic maps': L.tileLayer.provider('GeoportailFrance.ignMaps')
};

// overlays
var overlayLayers = {
    'OpenSeaMap': L.tileLayer.provider('OpenSeaMap'),
    'OpenWeatherMap Clouds': L.tileLayer.provider('OpenWeatherMap.Clouds'),
    'OpenWeatherMap CloudsClassic': L.tileLayer.provider('OpenWeatherMap.CloudsClassic'),
    'OpenWeatherMap Precipitation': L.tileLayer.provider('OpenWeatherMap.Precipitation'),
    'OpenWeatherMap PrecipitationClassic': L.tileLayer.provider('OpenWeatherMap.PrecipitationClassic'),
    'OpenWeatherMap Rain': L.tileLayer.provider('OpenWeatherMap.Rain'),
    'OpenWeatherMap RainClassic': L.tileLayer.provider('OpenWeatherMap.RainClassic'),
    'OpenWeatherMap Pressure': L.tileLayer.provider('OpenWeatherMap.Pressure'),
    'OpenWeatherMap PressureContour': L.tileLayer.provider('OpenWeatherMap.PressureContour'),
    'OpenWeatherMap Wind': L.tileLayer.provider('OpenWeatherMap.Wind'),
    'OpenWeatherMap Temperature': L.tileLayer.provider('OpenWeatherMap.Temperature'),
    'OpenWeatherMap Snow': L.tileLayer.provider('OpenWeatherMap.Snow'),
    'Geoportail France Parcels': L.tileLayer.provider('GeoportailFrance.parcels')
};

// adding baselayers and overlays to map
L.control.layers(baseLayers, overlayLayers, {collapsed: true}).addTo(map);

// adding the sidebar to the map
L.control.sidebar('sidebar').addTo(map);

/*
// function declarations and definitions
// move map to the called country
function gotocountry (c){
    // you get  afghanistan coordinates from google 
    // this is how to update information on the map through
    if(c=='af')
        map.setView(new L.LatLng(34.5333, 69.1333), 6);
    else if(c=='tn')
        map.setView(new L.LatLng(34,9), 6);
    return;
}*/


// geojson data can be added from an external file "file.geojson", I am having problems doing that
// or geojson data can be stored in a variable and called, easier
// its better to called geojson data from its file which makes the data easier to update

// this section are the variables holding data
var yde = new L.GeoJSON.AJAX("layers/yde.json");
var eau = new L.GeoJSON.AJAX("layers/eau.json");
var pop = new L.GeoJSON.AJAX("layers/pop.json");
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

// changing icons
// replace Leaflet's default blue marker with a custom icon
function createCustomIcon (feature, latlng) {
    let myIcon = L.icon({
      iconUrl: 'img/eau_icon.png',
    //   shadowUrl: 'img/eau_icon.png',
      iconSize:     [25, 25], // width and height of the image in pixels
    //   shadowSize:   [35, 20], // width, height of optional shadow image
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    //   shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
    return L.marker(latlng, { icon: myIcon })
  }
  
  // create an options object that specifies which function will called on each feature
  let myLayerOptions = {
    pointToLayer: createCustomIcon
  }



// this section is the styling for the data
var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

// all the layers go into this layer group
var layerGroup = L.layerGroup().addTo(map);
// function to use data
function addGeojson (c){
    // remove all the markers in one group
    layerGroup.clearLayers();
    // switch(c) {
    //     case 'yde':
    //         // code block
    //         yde.addTo(layerGroup);
    //         break;
    //     case 'eau':
    //         // code block
    //         eau.addTo(layerGroup);
    //         break;
    //     case 'pop':
    //         // code block
    //         pop.addTo(layerGroup);
    //         legend.addTo(layerGroup);
    //         break;
    //     default:
    //       // code block
    // }
    // the argument c is the name of the map in the db and the filename with extension .json
    var currentLayer = new L.GeoJSON.AJAX("layers/" + c, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<h1>'+geometry.type+'</h1><p>name: '+feature.type+'</p>');    // adding pop from data in json file
      }
    }).addTo(layerGroup);
}

// function for chlorpleth map
// used for population coloration
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}
// end of styling functions

// resize layers control to fit into view.
function resizeLayerControl () {
    var layerControlHeight = document.body.clientHeight - (10 + 50);
    var layerControl = document.getElementsByClassName('leaflet-control-layers-expanded')[0];
    
    layerControl.style.overflowY = 'auto';
    layerControl.style.maxHeight = layerControlHeight + 'px';
}
map.on('resize', resizeLayerControl);
resizeLayerControl();