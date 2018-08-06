
function GetLocation(add1) {
	//var add1 = "5617 shady meadows dr Hamilton oh 45011 usa";
	var geocoder = new google.maps.Geocoder();
	var address = add1; //document.getElementById("txtAddress").value;
	geocoder.geocode({ 'address': address }, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var latitude = results[0].geometry.location.lat();
			var longitude = results[0].geometry.location.lng();
			//alert("Latitude: " + latitude + "\nLongitude: " + longitude);
			// {lat: 38.9822282, lng:  -94.6707917}
			selectedGPS = '{lat: '+latitude+', lng: '+longitude+'}';
		} else {
			alert("Request failed.");
			selectedGPS = '{lat: 0, lng: 0}';
		};	
	});
};
		
		
function fixPhoneNumberDisplay(d) {
	if ( d == null || d == "" || d.length <10) {
		s = "0000000000";
	}else{
		s = d;
	};
	
	var s2 = (""+s).replace(/\D/g, '');
	var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
	return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

function chgCase(a,s) {
var rtData;
	switch(a){
		case 1:
		rtData = s.toUpperCase();
		break;
		case 2:
		rtData = s.toLowerCase();
		break;
		case 3:
		rtData = s.charAt(0).toUpperCase() + s.slice(1);
		break;
	
	};	
	return rtData;
}

function dateTime1(a) {
var rtData;
var d = new Date();
	var n = d.getTime();
	// document.getElementById("demo").innerHTML = d.getTime();
    var curr_date = d.getDate();
	if (curr_date < 10){
		curr_date = "0"+curr_date;
	};
    var curr_month = d.getMonth() + 1; //Months are zero based
	if (curr_month < 10){
		curr_month = "0"+curr_month;
	};
    var curr_year = d.getFullYear();
	
	if (curr_hour >= 13){
		curr_hour = curr_hour - 12;
	};
	
	var curr_hour = d.getHours();
	if (curr_hour < 10){
		curr_hour = "0"+curr_hour;
	};
	if (curr_hour > 12){
		curr_hour = (curr_hour -12) ;
	};
		
	var curr_minutes = d.getMinutes();
	if (curr_minutes < 10){
		curr_minutes = "0"+curr_minutes;
	};
	var curr_seconds = d.getSeconds();
	if (curr_seconds < 10){
		curr_seconds = "0"+curr_seconds;
	};
	
	
    var dateF = curr_date + "-" + curr_month + "-" + curr_year;
	var timeF = curr_hour +":"+ curr_minutes +":"+ curr_seconds;
	
	if ( a == 'd') {
		rtData = dateF;
	};
	if ( a == 't') {
		rtData = timeF;
	};
	if ( a == 's') {
		rtData = "   "+dateF+" @ "+timeF;
	};
	//alert(timeF+" bb started "+dateF);
	return rtData
}

function clock(){
	document.getElementById("secA").innerHTML = dateTime1('t');
	document.getElementById("secB").innerHTML = dateTime1('d');
}
function appTimers() {

	// 1000 ms = 1 second.
	// setInterval(function, milliseconds, param1, param2, ...)
	//setInterval(function(){ alert("Hello"); }, 3000);
	
	appTimer1 = setInterval(ddT, 3000, 'A');
	appTimer1 = setInterval(clock, 60000);
	//alert("bb started");

}
function ddT(p) {
	var d = new Date();
	var n = d.getTime();

	switch( p ) {
		case 'A':
			alert("bb started "+d);
		break;
	};
	document.getElementById("secA").innerHTML = test1('t');
}

function hideComponent(p){
	var x = document.getElementById(p);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    };
}

function toggleClass(p,s) {
// p = component, s = style
	var x = document.getElementById(p);

	if (x.classList) { 
		x.classList.toggle(s);
	} else {
		// For IE9
		var classes = x.className.split(" ");
		var i = classes.indexOf(s);

		if (i >= 0) 
			classes.splice(i, 1);
		else 
			classes.push(s);
			x.className = classes.join(" "); 
	}
}

function cookies(c,p,d,v){
	//alert("Cookies");
	var rtData = null;
	// p = name, d= duration , v = value
	/*
	expires: Define lifetime of the cookie. Value can be a Number (which will be interpreted as days from time of creation) or a Date object. If omitted, the cookie is a session cookie.

	path: Define the path where cookie is valid. By default the path of the cookie is the path of the page where the cookie was created (standard browser behavior). If you want to make it available for instance across the entire page use path: '/'.

	domain: Domain of page where the cookie was created.

	secure: Default: false. If true, the cookie transmission requires a secure protocol (https).

	raw: By default the cookie is encoded/decoded when creating/reading, using encodeURIComponent/ decodeURIComponent. Turn off by setting raw: true.
	*/

	switch(c){
		case 'Set':
			//To set a cookie
			$.cookie(p,v);
			//alert(c+" "+p+" "+v);
			rtData = null;
		break;
		case 'Set2':
			$.cookie(p, v, { expires: d });
			// $.cookie(p, v, { expires: d, path: '/' });
			//Create expiring cookie, valid across entire page:
			rtData = null;
		break;
		case 'Get':		
			rtData = $.cookie(p); // => 'the_value'
			cookie1 = rtData;
			//alert($.cookie(p)+" "+rtData);
			//$.cookie('not_existing'); // => null
			//Read cookie
		break;
		case 'Del':
			//Delete cookie by passing null as value:
			$.cookie(p, null);
			rtData = null;
		break;
		case 'SetAll':
			// Creating cookie with all availabl options
			$.cookie(p, v, { expires: d, path: '/', domain: 'example.com', secure: true, raw: true });
			rtData = null;
		break;
	};

return rtData;

}

function mySort(a,d){
var rtData;
	switch(a) {
		case 1:
		rtData = d.sort();
		break;
		case 2:
		// numbers array
		rtData = d.sort(function(a, b){return a-b});
		break;
	};
	return rtData;
}

function randN(a,v1,v2){
var rtData;
	switch(a){
		case 1:		
		rtData = Math.floor(Math.random()*(v2-v1+1)+v1);
		break;
		case 2:
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (var i = 0; i < 5; i++){
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			};
			rtData = text;
			return rtData;
		break;
		case 3:
			var text = "";
			var text2 = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (var i = 0; i < 10; i++){
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			for (var i = 5; i < 8; i++){
				text2 += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			rtData = text2 + Math.floor(Math.random()*(v2-v1+1)+v1) + text + Math.floor(Math.random()*(v2-v1+1)+v1);
			return rtData;
		break;
	
	}
	return rtData;
}


function getUrlParameter(sParam) {
		//alert("cccc " + sParam);
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    };
	return sParameterName[1] === undefined ? true : sParameterName[1];
};
//function mainBar(franID,userName,message) {
function mainBar(z) {
	// cookieData[2],cookieData[3],'
	//appendto1
	//document.getElementById("appendto1").innerHTML = "&nbsp;"+franID+" :: "+userName+" :: Message : "+message;
	document.getElementById("appendto1").innerHTML = "&nbsp;"+cookieData[2]+" :: "+cookieData[3]+" :: Message : "+z;
	
}





