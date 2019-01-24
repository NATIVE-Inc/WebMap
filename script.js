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
var yde = [{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    11.4697265625,
                    3.847812430239486
                ]
            }
        }
    ]
}];
var eau = [{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.777587890625,
            2.6248138208185074
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            13.82080078125,
            3.7217452310689536
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            13.02978515625,
            5.725311447610156
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.799560546875,
            5.900188795584184
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.909667968749998,
            4.455950571647079
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.315185546875,
            7.710991655433217
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.1064453125,
            8.819938928283146
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.59033203125,
            7.38425782830926
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.534912109374998,
            11.135287077054238
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            13.77685546875,
            10.120301632173907
          ]
        }
      }
    ]
  }];
var pop = [{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Hello world",
          "sub": "How are you?",
          "density": 10
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                14.326171874999998,
                2.152813583128846
              ],
              [
                14.919433593750001,
                2.0210651187669897
              ],
              [
                15.468749999999998,
                1.9332268264771233
              ],
              [
                16.040039062499996,
                1.7794990011582254
              ],
              [
                16.171875,
                1.7136116598836224
              ],
              [
                16.10595703125,
                2.1747705722118864
              ],
              [
                16.2158203125,
                2.28455066023697
              ],
              [
                16.083984375,
                2.438228596940692
              ],
              [
                15.908203125,
                3.1405161039832485
              ],
              [
                15.49072265625,
                3.447624666646865
              ],
              [
                15.1171875,
                3.9738609758391017
              ],
              [
                14.897460937499998,
                4.280680030820496
              ],
              [
                14.348144531249998,
                4.455950571647079
              ],
              [
                13.886718749999998,
                4.4997617436205255
              ],
              [
                13.645019531249998,
                4.54357027937176
              ],
              [
                13.53515625,
                4.324501493019203
              ],
              [
                13.24951171875,
                4.061535597066106
              ],
              [
                13.161621093749998,
                3.908098881894123
              ],
              [
                13.447265624999998,
                3.601142320158735
              ],
              [
                13.645019531249998,
                3.2940822283128175
              ],
              [
                13.9306640625,
                3.052753821574483
              ],
              [
                14.084472656249998,
                2.6577377901397883
              ],
              [
                13.99658203125,
                2.3723687086440503
              ],
              [
                13.842773437499998,
                2.1747705722118864
              ],
              [
                14.326171874999998,
                2.152813583128846
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hello world",
          "sub": "How are you?",
          "density": 21
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                12.238769531249998,
                2.2625953010152453
              ],
              [
                12.76611328125,
                2.2625953010152453
              ],
              [
                13.18359375,
                2.2625953010152453
              ],
              [
                13.46923828125,
                2.1747705722118864
              ],
              [
                13.886718749999998,
                2.152813583128846
              ],
              [
                14.0625,
                2.591888984149953
              ],
              [
                13.886718749999998,
                3.0746950723696944
              ],
              [
                13.55712890625,
                3.381823735328289
              ],
              [
                13.33740234375,
                3.7984839750369747
              ],
              [
                13.161621093749998,
                3.886177033699361
              ],
              [
                13.0078125,
                4.039617826768437
              ],
              [
                12.54638671875,
                3.886177033699361
              ],
              [
                12.19482421875,
                3.886177033699361
              ],
              [
                11.62353515625,
                3.7765593098768635
              ],
              [
                11.71142578125,
                3.469557303061473
              ],
              [
                11.7333984375,
                3.0088699788481547
              ],
              [
                11.953125,
                2.3943223575350774
              ],
              [
                12.0849609375,
                2.2406396093827334
              ],
              [
                12.238769531249998,
                2.2625953010152453
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hello world",
          "sub": "How are you?",
          "density": 51
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                15.1171875,
                4.017699464336852
              ],
              [
                15.1171875,
                4.19302960536076
              ],
              [
                15.051269531249998,
                4.368320420876243
              ],
              [
                14.853515625,
                4.521666342614804
              ],
              [
                14.743652343749998,
                4.631179340411012
              ],
              [
                14.677734375000001,
                4.937724274302492
              ],
              [
                14.677734375000001,
                5.134714634014467
              ],
              [
                14.567871093749998,
                5.200364681183489
              ],
              [
                14.567871093749998,
                5.397273407690917
              ],
              [
                14.567871093749998,
                5.572249801113911
              ],
              [
                14.567871093749998,
                5.834616165610059
              ],
              [
                14.4580078125,
                6.009459238059562
              ],
              [
                14.3701171875,
                6.18424616128059
              ],
              [
                14.326171874999998,
                6.402648405963896
              ],
              [
                14.1943359375,
                6.533645130567532
              ],
              [
                13.886718749999998,
                6.402648405963896
              ],
              [
                13.60107421875,
                6.315298538330033
              ],
              [
                13.33740234375,
                6.446317749457659
              ],
              [
                12.963867187499998,
                6.577303118123887
              ],
              [
                12.65625,
                6.468151012664214
              ],
              [
                12.480468749999998,
                6.162400921526595
              ],
              [
                12.32666015625,
                5.922044619883305
              ],
              [
                12.216796875,
                5.856474565300485
              ],
              [
                12.3486328125,
                5.506639674354886
              ],
              [
                12.216796875,
                5.244127581489541
              ],
              [
                12.0849609375,
                4.959615024698026
              ],
              [
                12.12890625,
                4.631179340411012
              ],
              [
                12.568359375,
                4.368320420876243
              ],
              [
                12.81005859375,
                4.12728532324537
              ],
              [
                12.89794921875,
                4.039617826768437
              ],
              [
                13.07373046875,
                3.9519408561575946
              ],
              [
                13.29345703125,
                4.083452772038619
              ],
              [
                13.46923828125,
                4.171115454867424
              ],
              [
                13.5791015625,
                4.434044005032582
              ],
              [
                13.842773437499998,
                4.4997617436205255
              ],
              [
                14.2822265625,
                4.455950571647079
              ],
              [
                14.655761718749998,
                4.324501493019203
              ],
              [
                14.96337890625,
                4.19302960536076
              ],
              [
                15.1171875,
                4.017699464336852
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hello world",
          "sub": "How are you?",
          "density": 101
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                12.052001953125,
                2.2955282141879016
              ],
              [
                11.986083984375,
                2.3943223575350774
              ],
              [
                11.920166015625,
                2.5260367521718403
              ],
              [
                11.854248046875,
                2.6906608812654062
              ],
              [
                11.766357421875,
                2.9101249120129142
              ],
              [
                11.71142578125,
                3.118576216781991
              ],
              [
                11.722412109375,
                3.392790869678844
              ],
              [
                11.700439453125,
                3.6121068894248256
              ],
              [
                11.57958984375,
                3.7655967694198504
              ],
              [
                11.392822265624998,
                3.7546340909109252
              ],
              [
                11.151123046874998,
                3.7655967694198504
              ],
              [
                11.019287109375,
                3.8204080831949407
              ],
              [
                10.8544921875,
                3.886177033699361
              ],
              [
                10.601806640625,
                3.8752158957336213
              ],
              [
                10.39306640625,
                3.853293194062048
              ],
              [
                10.17333984375,
                3.7875217118824227
              ],
              [
                10.107421874999998,
                3.6888551431470477
              ],
              [
                10.107421874999998,
                3.425691524418062
              ],
              [
                10.0634765625,
                3.283113991917241
              ],
              [
                9.99755859375,
                3.1405161039832485
              ],
              [
                9.909667968749998,
                2.9320690181896394
              ],
              [
                9.876708984375,
                2.767477951092084
              ],
              [
                9.854736328125,
                2.6248138208185074
              ],
              [
                9.832763671875,
                2.4601811810210052
              ],
              [
                9.84375,
                2.28455066023697
              ],
              [
                9.9755859375,
                2.1857489471296665
              ],
              [
                10.140380859375,
                2.1747705722118864
              ],
              [
                10.404052734375,
                2.1747705722118864
              ],
              [
                10.865478515625,
                2.152813583128846
              ],
              [
                11.18408203125,
                2.1637921174107735
              ],
              [
                11.337890625,
                2.1857489471296665
              ],
              [
                11.44775390625,
                2.28455066023697
              ],
              [
                11.57958984375,
                2.3174830687583045
              ],
              [
                11.700439453125,
                2.3174830687583045
              ],
              [
                11.810302734375,
                2.2625953010152453
              ],
              [
                11.953125,
                2.2625953010152453
              ],
              [
                12.052001953125,
                2.2955282141879016
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hello world",
          "sub": "How are you?",
          "density": 201
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                10.107421874999998,
                3.71078200434872
              ],
              [
                10.206298828125,
                3.7984839750369747
              ],
              [
                10.426025390625,
                3.853293194062048
              ],
              [
                10.711669921874998,
                3.8752158957336213
              ],
              [
                10.92041015625,
                3.8642546157214084
              ],
              [
                11.18408203125,
                3.7546340909109252
              ],
              [
                11.53564453125,
                3.7875217118824227
              ],
              [
                11.656494140625,
                3.7875217118824227
              ],
              [
                11.97509765625,
                3.853293194062048
              ],
              [
                12.183837890625,
                3.8752158957336213
              ],
              [
                12.359619140624998,
                3.8752158957336213
              ],
              [
                12.689208984375,
                3.9300201571114752
              ],
              [
                12.89794921875,
                3.995780512963038
              ],
              [
                12.886962890625,
                4.094411135280809
              ],
              [
                12.722167968749998,
                4.225899677985493
              ],
              [
                12.480468749999998,
                4.434044005032582
              ],
              [
                12.216796875,
                4.598327203100916
              ],
              [
                12.12890625,
                4.729726554568902
              ],
              [
                12.117919921874998,
                4.893940608902113
              ],
              [
                12.183837890625,
                5.0800010938086215
              ],
              [
                12.28271484375,
                5.3425828520359735
              ],
              [
                12.315673828125,
                5.5941182188847875
              ],
              [
                12.216796875,
                5.856474565300485
              ],
              [
                12.32666015625,
                5.911116815631734
              ],
              [
                12.447509765625,
                6.064086258846952
              ],
              [
                12.63427734375,
                6.468151012664214
              ],
              [
                12.557373046874998,
                6.500899137995968
              ],
              [
                12.337646484375,
                6.555474602201876
              ],
              [
                12.205810546875,
                6.620957270326323
              ],
              [
                12.030029296875,
                6.68643125265198
              ],
              [
                11.854248046875,
                6.740986208759249
              ],
              [
                11.755371093749998,
                6.871892962887516
              ],
              [
                11.634521484374998,
                6.970049417296232
              ],
              [
                11.590576171875,
                6.7737162387535
              ],
              [
                11.524658203125,
                6.642782900356179
              ],
              [
                11.392822265624998,
                6.544559985653322
              ],
              [
                11.195068359374998,
                6.5118147063479
              ],
              [
                11.14013671875,
                6.599130675207247
              ],
              [
                10.986328125,
                6.68643125265198
              ],
              [
                10.87646484375,
                6.850077654785543
              ],
              [
                10.70068359375,
                7.0245719178463695
              ],
              [
                10.579833984375,
                7.1553997459536065
              ],
              [
                10.535888671875,
                6.948238638117019
              ],
              [
                10.404052734375,
                6.915520573049643
              ],
              [
                10.2392578125,
                6.948238638117019
              ],
              [
                10.08544921875,
                7.0027636819827475
              ],
              [
                9.942626953125,
                6.860985433763661
              ],
              [
                9.766845703125,
                6.68643125265198
              ],
              [
                9.5361328125,
                6.489983332670651
              ],
              [
                9.426269531249998,
                6.435400765132336
              ],
              [
                9.305419921874998,
                6.271618064314864
              ],
              [
                9.129638671875,
                6.096859818887948
              ],
              [
                8.953857421875,
                5.932972207945653
              ],
              [
                8.865966796875,
                5.670651222566598
              ],
              [
                8.876953125,
                5.484768018141262
              ],
              [
                8.8330078125,
                5.320705259943899
              ],
              [
                8.778076171875,
                5.167540507950538
              ],
              [
                8.76708984375,
                5.036226914872196
              ],
              [
                8.668212890625,
                4.8282597468669754
              ],
              [
                8.778076171875,
                4.609278084409835
              ],
              [
                8.931884765625,
                4.477856485570586
              ],
              [
                8.89892578125,
                4.379274753863339
              ],
              [
                9.03076171875,
                4.050576786133467
              ],
              [
                9.404296875,
                3.9190595913245962
              ],
              [
                9.82177734375,
                4.07249425916745
              ],
              [
                10.118408203125,
                3.908098881894123
              ],
              [
                10.107421874999998,
                3.71078200434872
              ]
            ]
          ]
        }
      }
    ]
  }];
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
      shadowUrl: 'img/eau_icon.png',
      iconSize:     [25, 25], // width and height of the image in pixels
      shadowSize:   [35, 20], // width, height of optional shadow image
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
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

// converting the data to geojson
var ydeGeojson = L.geoJSON(yde);
var eauGeojson = L.geoJSON(eau, myLayerOptions);
var popGeojson = L.geoJSON(pop, {style: style, onEachFeature: function (feature, layer) {
        layer.bindPopup('<h1>'+feature.properties.name+'</h1><p>name: '+feature.properties.sub+'</p>');
        layer.on('mouseover', function() { layer.openPopup(); });
        layer.on('mouseout', function() { layer.closePopup(); });
    }
  });

// function to use data
function addGeojson (c){
    clear();
    switch(c) {
        case 'yde':
            // code block
            ydeGeojson.addTo(map);
            break;
        case 'eau':
            // code block
            eauGeojson.addTo(map);
            break;
        case 'pop':
            // code block
            popGeojson.addTo(map);
            legend.addTo(map);
            break;
        default:
          // code block
    }
}

// clear all layers
function clear(){
    // checks every possible data layer 
    if(map.hasLayer(ydeGeojson)){
        map.removeLayer(ydeGeojson);
    } else if(map.hasLayer(eauGeojson)) {
        map.removeLayer(eauGeojson);
    } else if(map.hasLayer(popGeojson)) {
        map.removeLayer(popGeojson);
    } else {
        // do nothing
    }
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