export class Map {
  heading = 'this is where the map lives';
}

var map;

function init() {
  //initiate Leaflet Map
  map = new L.map('cartodb-map', {
    center: [0,0],
    zoom: 2
  });

var layerUrl = 'http://documentation.carto.com/api/v2/viz/836e37ca-085a-11e4-8834-0edbca4b5057/viz.json';

cartodb.createLayer(map, layerUrl)
  .addTo(map)
  .on('done', function(layer) {
  }).on('error', function() {
    //log err
    console.log('error: ', error);
  });

}



