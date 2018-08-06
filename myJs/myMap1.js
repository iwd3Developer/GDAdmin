/*
var map;
var markers = [];
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
*/
		
	function initMap1() {
		setTimeout(function(){ initMap1x(); }, 3000);
	}
	
    function initMap1x() {
		//alert("go2");
        var uluru = {lat: 39.114053, lng: -94.6274636};
		  //var uluru2 = {lat: 38.9822282, lng:  -94.6707917};
			map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          //center: uluru
          center: {lat: 39.114053, lng: -94.6274636}
        });
        addMarker(uluru, map);
		//map1Menu();
		//google.maps.event.trigger(map, 'resize');
		//var center = new google.maps.LatLng(39.11,-94.62);
		map.setCenter({	lat:39.11,lng:-94.62});
        //map.panTo(center);
		GetLocation("Kansas City, MS"); //init gps location "8686 Golson ave Cincinnati oh 45229 usa");
		
		/*
		var myOptions = {
			zoom: 14,
			center: new google.maps.LatLng(0.0, 0.0),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		map2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
		*/
		
		google.maps.event.trigger(map, 'resize');
    }
	  
	  function dodo() {
      //alert("ok");
      /*
      var marker = new google.maps.Marker({
        position: {lat: 38.9822282, lng: -94.6707917},
        label: 'xxxx',
        map: map
      });  
      */
      addMarker({lat: 38.9924282, lng: -94.6908917}, map);   
    }
    function dodo2() {
      //alert("ok");
	  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
      var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
      var marker = new google.maps.Marker({
        position: {lat: 38.9822282, lng:  -94.6707917},
        label: 'xxxx',
        map: map
      }); 
      marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      //addMarker({lat: 38.9822282, lng:  -94.6707917}, map);
	  addMarker(marker);
    }

	
function addMk1(pos,lab,cont) {
      //alert("ok");
	  var contentString = cont;
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });
      var marker = new google.maps.Marker({
        position: pos,
        label: lab,
        map: map
		
      }); 
      marker.addListener('click', function() {
          infowindow.open(map, marker);
      });

	  addMarker(marker);
}


    // Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}

function mkMarkers() {
	var pos = {lat: 38.9822282, lng:  -94.6707917};
	var lab = "Overland Park";
	var cont = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Overland Park</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Overland Park</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a></p>'+
            '</div></div>';

	addMk1(pos,lab,cont);	
}

	
function addMarkerWithTimeout(position, timeout,i) {
//alert("X "+position.pos);

var contentString = position.info;
var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

// add label, content
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position.pos,
            map: map,
			label: position.label,
            animation: google.maps.Animation.DROP
          }));

		markers[i].addListener('click', function() {
          infowindow.open(map, markers[i]);
        });

        }, timeout);


}
function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }
function mkMarkersGroup() {
// drop

 clearMarkers();
 var neighborhoods_org = [
        {lat: 52.511, lng: 13.447},
        {lat: 52.549, lng: 13.422},
        {lat: 52.497, lng: 13.396},
        {lat: 52.517, lng: 13.394}
      ];

 var neighborhoods = [
        {pos:{lat: 52.511, lng: 13.447},label:'xxsed1',info:'sdfsdfsdfsdfsd1'},
        {pos:{lat: 52.549, lng: 13.422},label:'xxsed2',info:'sdfsdfsdfsdfsd2'},
        {pos:{lat: 52.497, lng: 13.396},label:'xxsed3',info:'sdfsdfsdfsdfsd3'},
        {pos:{lat: 52.517, lng: 13.394},label:'xxsed4',info:'sdfsdfsdfsdfsd4'}
      ];

     for (var i = 0; i < neighborhoods.length; i++) {
          addMarkerWithTimeout(neighborhoods[i], i * 200,i);
     }

}

function map1Menu() {
	var str1 = '';
	str1 += '             <ul id="mapAmenu" > ';

str1 += '                 <li> ';
str1 += '                     Job Info ';
str1 += '                     <ul> ';
str1 += '                         <li> ';
str1 += '                             Jobs Schedualed ';
str1 += '                             <ul> ';
str1 += '                                 <li>Todays Jobs</li> ';
str1 += '                                 <li>Tomorrows</li> ';
str1 += '                                 <li>This week</li> ';
str1 += '                                <li>Next Week</li> ';
str1 += '                                 <li>This Month</li> ';
str1 += '                             </ul> ';
str1 += '                         </li> ';
	str1 += '                         <li> ';
	str1 += '                             Current Jobs ';
	str1 += '                            <ul> ';
	str1 += '                                 <li>Status</li> ';
	str1 += '                                 <li>Today Map</li> ';
	str1 += '                                 <li>Crew and Customers</li> ';
	str1 += '                                 <li>Routes</li> ';
	str1 += '                                 <li>Special Items</li> ';
	str1 += '                             </ul> ';
	str1 += '                         </li> ';

	str1 += '                         <li> ';
	str1 += '                             Storage ';
	str1 += '                             <ul> ';
	str1 += '                                 <li>Wall Shelving</li> ';
	str1 += '                                 <li>Kids Storage</li> ';
	str1 += '                                 <li>Baskets</li> ';
	str1 += '                                 <li>Multimedia Storage</li> ';
	str1 += '                                 <li>Floor Shelving</li> ';
	str1 += '                                 <li>Toilet Roll Holders</li> ';
	str1 += '                                 <li>Storage Jars</li> ';
	str1 += '                                 <li>Drawers</li> ';
	str1 += '                                 <li>Boxes</li> ';
   str1 += '<li><a href="javascript: mkMarkers();">marker</a></li> ';
   str1 += '<li><a href="javascript: mkMarkersGroup();">marker2X</a></li> ';
   str1 += '<li><a href="javascript: dodo2();">marker2</a></li> ';
							   
	str1 += '                             </ul> ';
	str1 += '                         </li> ';
str1 += '                         <li> ';
str1 += '                             Lights ';
str1 += '                             <ul> ';
str1 += '                                 <li>Ceiling</li> ';
str1 += '                                 <li>Table</li> ';
str1 += '                                 <li>Floor</li> ';
str1 += '                                 <li>Shades</li> ';
str1 += '                                 <li>Wall Lights</li> ';
str1 += '                                 <li>Spotlights</li> ';
str1 += '                                 <li>Push Light</li> ';
str1 += '                                 <li>String Lights</li> ';
str1 += '                             </ul> ';
str1 += '                         </li> ';
str1 += '                     </ul> ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Stores ';
str1 += '                     <ul> ';
str1 += '                         <li> ';
str1 += '                             <div id="template" style="padding: 10px;"> ';
str1 += '                                 <h2>Around the Globe</h2> ';
str1 += '                                 <ol> ';
str1 += '                                     <li>United States</li> ';
str1 += '                                     <li>Europe</li> ';
str1 += '                                     <li>Canada</li> ';
str1 += '                                     <li>Austr1lia</li> ';
str1 += '                                 </ol> ';
str1 += '                                 <img src="./content/web/menu/map.png" alt="Stores Around the Globe" /> ';
//str1 += '                                 <button class="k-button">See full list</button> ';
str1 += '                             </div> ';
str1 += '                         </li> ';
str1 += '                     </ul> ';
str1 += '                 </li> ';
/*
str1 += '                <li> ';
str1 += '                     Blog ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Company ';
str1 += '                 </li> ';

str1 += '                 <li> ';
str1 += '                     Events ';
str1 += '                 </li> ';

str1 += '                 <li disabled="disabled"> ';
str1 += '                     News ';
str1 += '                 </li> ';
*/

str1 += '             </ul> ';
//str1 += '         </div> ';
str1 += '         <style> ';
str1 += '             #megaStore { ';
str1 += '                 max-width: 600px; ';
str1 += '                 margin: 30px auto; ';
str1 += '                 padding-top: 120px; ';
str1 += '                 background: url("/content/web/menu/header.jpg") no-repeat center 0; ';
str1 += '             } ';
str1 += '             #menu h2 { ';
str1 += '                 font-size: 1em; ';
str1 += '                 text-transform: uppercase; ';
str1 += '                 padding: 5px 10px; ';
str1 += '             } ';
str1 += '             #template img { ';
str1 += '                 margin: 5px 20px 0 0; ';
str1 += '                 float: left; ';
str1 += '             } ';
str1 += '             #template { ';
str1 += '                 width: 380px; ';
str1 += '             } ';
str1 += '             #template ol { ';
str1 += '                 float: left; ';
str1 += '                 margin: 0 0 0 30px; ';
str1 += '                 padding: 10px 10px 0 10px; ';
str1 += '             } ';
str1 += '             #template:after { ';
str1 += '                 content: "."; ';
str1 += '                 display: block; ';
str1 += '                 height: 0; ';
str1 += '                 clear: both; ';
str1 += '                 visibility: hidden; ';
str1 += '             } ';
str1 += '             #template .k-button { ';
str1 += '                 float: left; ';
str1 += '                 clear: left; ';
str1 += '                 margin: 5px 0 5px 12px; ';
str1 += '             } ';
str1 += '         </style> <br/>';

document.getElementById("map1menu").innerHTML = str1;
$("#mapAmenu").kendoMenu({
		select: onSelect_menu,
		open: onOpen_menu,
        close: onClose_menu,
        activate: onActivate_menu,
        deactivate: onDeactivate_menu
	});
}

/*
 function fitmap(id) {
    var coords = [];
    var newlatlng = new google.maps.LatLng(projlat, projlng);
    coords.push(newlatlng);

        for (var i=0; i<markers[id].length; i++) {
            newlatlng = new google.maps.LatLng(markers[id][i].latitude, markers[id][i].longitude);
            coords.push(newlatlng);
        }
    }   

    var bounds = new google.maps.LatLngBounds ();
    for (var i = 0, LtLgLen = coords.length; i < LtLgLen; i++) {
        bounds.extend (coords[i]);
    }
    map.fitBounds(bounds);
}
*/

//<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8tqvUEVXeSu5KWPuZTNtIavLFdwgBJcs&callback=initMap">
//</script>

// END TAB1