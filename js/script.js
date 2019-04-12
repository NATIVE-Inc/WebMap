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
// var yde = new L.GeoJSON.AJAX("layers/yde.json");
// var eau = new L.GeoJSON.AJAX("layers/eau.json");
// var pop = new L.GeoJSON.AJAX("layers/pop.json");
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10000, 20000, 50000, 100000, 200000, 500000, 1000000],  // put values here for legend coloration
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML += '<p>Population en 2005</p>';
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

// all the layers go into this layer group
var layerGroup = L.layerGroup().addTo(map);
// function to use data
function addGeojson (c){
    // remove all the markers in one group
    layerGroup.clearLayers();
    console.log(c);
    var currentLayer = new L.GeoJSON.AJAX("js/layers/" + c, {
    onEachFeature: onEachFeature
    }).addTo(layerGroup);
    legend.addTo(map); // adds legend to map
}

// add features to individual markers 
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.ADM2) {
        layer.bindPopup('<b>' + feature.properties.ADM2 + '</b><br/><b>Pop: </b>' + (feature.properties.POP).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' Hb/km2'); // string format to thousand .toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

    // styling each individual department
    layer.setStyle({weight: 0, fillOpacity : 0, strokeOpacity : 0});
    // ADM3 -- fillColor
    if (feature.properties.POP != '-') {  // checks if population exists
        theColor = getColor(feature.properties.POP); // gets color based on pop
        layer.setStyle({fillColor :theColor, stroke : theColor}); // stroke and fill color are thesame
    }

    // ADM4 -- fill opacity
    if (feature.properties.POP != '-') {
        theOpacity = getOpacity(feature.properties.POP);
        layer.setStyle({fillOpacity :theOpacity, strokeOpacity : theOpacity});
    }
}
// function for chlorpleth map
// used for population coloration
function getColor(d) {
    return d > 1000000 ? '#800026' :
           d > 500000  ? '#BD0026' :
           d > 200000  ? '#E31A1C' :
           d > 100000  ? '#FC4E2A' :
           d > 50000   ? '#FD8D3C' :
           d > 20000   ? '#FEB24C' :
           d > 10000   ? '#FED976' :
                      '#FFEDA0';
}

// opacity gradient for population variations 
function getOpacity(d) {
    return d > 1000000 ? '0.7' :
           d > 500000  ? '0.6' :
           d > 200000  ? '0.5' :
           d > 100000  ? '0.4' :
           d > 50000   ? '0.3' :
           d > 20000   ? '0.2' :
           d > 10000   ? '0.1' :
                      '0.0';
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
// function resizeLayerControl () {
//     var layerControlHeight = document.body.clientHeight - (10 + 50);
//     var layerControl = document.getElementsByClassName('leaflet-control-layers-expanded')[0];
    
//     layerControl.style.overflowY = 'auto';
//     layerControl.style.maxHeight = layerControlHeight + 'px';
// }
// map.on('resize', resizeLayerControl);
// resizeLayerControl();
/*
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
Now we can create all three of our leaf icons from this class and use them:

var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);


    // create custom icon
IconStyleOne = L.icon({
            iconUrl: 'img/image1.png'
        });
IconStyleTwo = L.icon({
            iconUrl: 'img/image2.png'
        });

// ...

//Create empty geojson with mouseover and mouseout events
geojson_feature = L.geoJson(false, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: IconStyleOne});
    },
    onEachFeature: function(feature,layer)
            {
            layer.on("mouseover",function(e){
                layer.setIcon(IconStyleOne)
            });
            layer.on("mouseout",function(e){
                layer.setIcon(IconStyleTwo)
            });
            }
}).addTo(this.map);*/