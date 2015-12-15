src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js"

function main() {
  cartodb.createVis('map', 'https://hostx009.cartodb.com/api/v2/viz/b6f522a4-6784-11e5-beb1-0e98b61680bf/viz.json', {
      shareable: true,
      title: true,
      description: true,
      search: true,
      tiles_loader: true,
      center_lat: 40,
      center_lon: -100,
      zoom: 4
  })
  .done(function(vis, layers) {
    // layer 0 is the base layer, layer 1 is cartodb layer
    // setInteraction is disabled by default
    layers[1].setInteraction(true);
    layers[1].on('featureOver', function(e, latlng, pos, data) {
      cartodb.log.log(e, latlng, pos, data);
    });
    // you can get the native map to work with it
    var map = vis.getNativeMap();
    // now, perform any operations you need
    // map.setZoom(3);
    // map.panTo([50.5, 30.5]);
    $("#AlaskaCurling").click(function(){
      map.panTo([65,220]);
      map.setZoom(4);
    });

    $("#At-Large").click(function(){
      map.panTo([40,260]);
      map.setZoom(4);
    });

    $("#ColCurling").click(function(){
      map.panTo([42,255]);
      map.setZoom(6);
    });

    $("#GNCC").click(function(){
      map.panTo([38,290]);
      map.setZoom(5);
    });

    $("#IllinoisCurling").click(function(){
      map.panTo([41,270]);
      map.setZoom(7);
    });

    $("#MidAmerica").click(function(){
      map.panTo([35,265]);
      map.setZoom(5);
    });

    $("#MinnCurling").click(function(){
      map.panTo([46.5,265]);
      map.setZoom(7);
    });

    $("#Mopac").click(function(){
      map.panTo([41,240]);
      map.setZoom(5);
    });

    $("#Nodak").click(function(){
      map.panTo([46.5,260]);
      map.setZoom(7);
    });

    $("#WashCurling").click(function(){
      map.panTo([47.7,240]);
      map.setZoom(7);
    });

    $("#WiscCurling").click(function(){
      map.panTo([45,270]);
      map.setZoom(7);
    });

// States
$("#Alaska").click(function(){
      map.panTo([65,220]);
      map.setZoom(4);
    });
$("#Arizona").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#California").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Colorado").click(function(){
      map.panTo([39,255]);
      map.setZoom(7);
    });
$("#Connecticut").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Florida").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Georgia").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Hawaii").click(function(){
      map.panTo([21,202]);
      map.setZoom(8);
    });
$("#Idaho").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Illinois").click(function(){
      map.panTo([40,270]);
      map.setZoom(7);
    });
$("#Indiana").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Iowa").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Maine").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Maryland").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Massachusetts").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Michigan").click(function(){
      map.panTo([44.7,275]);
      map.setZoom(7);
    });
$("#Minnesota").click(function(){
      map.panTo([46.5,265]);
      map.setZoom(7);
    });
$("#Mississippi").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Missouri").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Montana").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Nebraska").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Nevada").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#NewHampshire").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#NewJersey").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#NewYork").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#NorthCarolina").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#NorthDakota").click(function(){
      map.panTo([46.5,260]);
      map.setZoom(7);
    });
$("#Ohio").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Oklahoma").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Oregon").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Pennsylvania").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#RhodeIsland").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#SouthCarolina").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#SouthDakota").click(function(){
      map.panTo([46,260]);
      map.setZoom(7);
    });
$("#Tennessee").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Texas").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Utah").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Vermont").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
$("#Virginia").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
  $("#Washington").click(function(){
      map.panTo([47.7,240]);
      map.setZoom(7);
    });
  $("#Wisconsin").click(function(){
      map.panTo([45,270]);
      map.setZoom(7);
    });
  $("#Wyoming").click(function(){
      map.panTo([,]);
      map.setZoom();
    });
  })
  .error(function(err) {
    console.log(err);
  });
}
window.onload = main;
