var dGrid1;

function updateMap(){
	// 500 N.W. Barry Rd Kansas City, MO 64155
	//var pos = {lat: 39.246475, lng: -94.58622};//"39.246475,-94.58622";
	// 3002 W 47TH ST, KANSAS CITY, KS, 66103
//	39.044083|-94.61802
	//mkMarkers();//OK
	
	// job1Data[i]
	for (i = 0; i < job1Data.length; i++) {
		var gps1=[];
		var st = job1Data[i].gpsLoc;
		gps1 = st.split("|");
		//var pos = {lat: 38.9822282, lng:  -94.6707917};
		alert(gps1[0]+" : "+gps1[1]+" "+job1Data[i].FirstName+" "+job1Data[i].LastName+" "+job1Data[i].addr1+);
		var pos = {lat: gps1[0], lng: gps1[1]};
		var lab = "XXX";//job1Data[i].FirstName+" "+job1Data[i].LastName;
		var cont = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h3 id="firstHeading" class="firstHeading">xxxx</h3>'+
	            '<div id="bodyContent">'+
	            '<p><b>Overland Park</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
	            'sandstone rock formation in the southern part of the Heritage Site.</p>'+
	            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
	            'https://en.wikipedia.org/w/index.php?title=Uluru</a></p>'+
	            '</div></div>';

		addMk1(pos,lab,cont);
	}
}

function desktopFooters(q){
	/*
	switch(q) {
		case "divCal_meta":
			//desktopFooters("divCal_meta");
			var dt2 = dateTime2('s');
			document.getElementById("divCal_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "divVehicle_meta":
			//desktopFooters("divVehicle_meta");
			var dt2 = dateTime2('s');
			document.getElementById("divVehicle_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "divMap_meta":
			//desktopFooters("divMap_meta");
			var dt2 = dateTime2('s');
			document.getElementById("divMap_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
	};
	*/
}

function initKendoCtrls() {
	// init telerick controls
	// create Calendar from div HTML element
	alert("Yes");

			
	$("#tabstrip").kendoTabStrip({
		activate: onActivate,
		show: onShow,
		select: onSelect,
		animation:  {
			open: {
				effects: "fadeIn"
			}
		}
	});
	//showHideTab();
	
	$("#panelbar1").kendoPanelBar({
		expandMode: "single",
		contentUrls: [
			'./pages/page_1.html',
			'./pages/page_2.html',
			'./pages/a_pg2.html',
			'./pages/a_pg3.html'
		]
	});

	
	 //calX();
	 //showCal(data2,d);
		// scheduler update
		//scheduler = $("#scheduler").data("kendoScheduler");		
		//$("#scheduler").data("kendoScheduler").refresh();	
		//$('#scheduler').data('kendoScheduler').dataSource.read();
	
	//EXAMPLE $("#calendar").kendoCalendar();
	
	var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");
	var d = new Date();
	popupNotification.show(kendo.toString(d, 'HH:MM:ss.') + kendo.toString(d.getMilliseconds(), "000"), "error");       

	var today = new Date(),
	events = [
	   +new Date(today.getFullYear(), today.getMonth(), 8),
	   +new Date(today.getFullYear(), today.getMonth(), 12),
	   +new Date(today.getFullYear(), today.getMonth(), 24),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 6),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 7),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 25),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 27),
	   +new Date(today.getFullYear(), today.getMonth() - 1, 3),
	   +new Date(today.getFullYear(), today.getMonth() - 1, 5),
	   +new Date(today.getFullYear(), today.getMonth() - 2, 22),
	   +new Date(today.getFullYear(), today.getMonth() - 2, 27)
	];
	
	// #calendar1
	//desktopFooters("divCal_meta");
	function onChange_calendar1(e) {
		console.log("Change :: " + kendo.toString(this.value(), 'd'));
		desktopFooters("divCal_meta");
	}
	function onNavigate_calendar1(e) {
		console.log("Navigate");
	}
	$("#calendar1").kendoCalendar({
		value: today,
		dates: events,
		weekNumber: true,
		//width:250, height:130,
		change: onChange_calendar1,
		navigate: onNavigate_calendar1,
		weekNumber: '<a class="italic">#= data.weekNumber #</a>',
		month: {
			// template for dates in month view
			content: '# if ($.inArray(+data.date, data.dates) != -1) { #' +
						'<div class="' +
						   '# if (data.value < 10) { #' +
							   "exhibition" +
						   '# } else if ( data.value < 20 ) { #' +
							   "party" +
						   '# } else { #' +
							   "cocktail" +
						   '# } #' +
						'">#= data.value #</div>' +
					 '# } else { #' +
					 '#= data.value #' +
					 '# } #',
			weekNumber: '<a class="italic">#= data.weekNumber #</a>'
		},
                dates: [
                  new Date("1/1/2018"),
                  new Date("1/19/2018"),
                  new Date("2/16/2018"),
                  new Date("4/16/2018"),
                  new Date("5/10/2018"),
                  new Date("5/25/2018"),
                  new Date("6/21/2018"),
                  new Date("7/3/2018"),
                  new Date("9/7/2018"),
                  new Date("10/12/2018"),
                  new Date("11/11/2018"),
                  new Date("11/26/2018"),
                  new Date("11/27/2018"),
                  new Date("12/25/2018")
                ],
                disableDates: function (date) {
                    var dates = $("#calendar1").data("kendoCalendar").options.dates;
                    if (date && compareDates(date, dates)) {
                        return true;
                    } else {
                        return false;
                    }
                }
		});
		
		function compareDates(date, dates) {
			for (var i = 0; i < dates.length; i++) {
				if (dates[i].getDate() == date.getDate() &&
					dates[i].getMonth() == date.getMonth() &&
					dates[i].getYear() == date.getYear()) {
				  return true
				}
			}
		}
	// END #calendar1
	
	// grid example
	$("#grid").kendoGrid({
		dataSource: {
			data: products,
			schema: {
				model: {
					fields: {
						ProductName: { type: "string" },
						UnitPrice: { type: "number" },
						UnitsInStock: { type: "number" },
						Discontinued: { type: "boolean" }
					}
				}
			},
			pageSize: 20
		},
		height: 250,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName11",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "130px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "130px" },
			{ field: "Discontinued", width: "130px" }
		]
	});
	
	// end grid

	


	//alert("Look "+ getJobs1Data());
	// edit model and columns
	// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, franID
	$("#divGrid1").kendoGrid({
		dataSource: dSource1(),
			schema: {
				model: {
					fields: {
						idx: { type: "number" },
						clientID: { type: "string" },
						FirstName: { type: "string" },
						LastName: { type: "string" },
						fullName: { type: "string" },
						addr1: { type: "string" },
						fullAddr: { type: "string" },
						city: { type: "string" },
						state: { type: "string" },
						zipcode: { type: "string" },
						phone1: { type: "string" },
						phone2: { type: "string" },
						phone3: { type: "string" },
						moveDate: { type: "moveDate" },
						gpsLat: { type: "string"},
						gpsLog: { type: "string"}
						
					}
				}
			},
		
		pageSize: 20,
		height: 150,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: true,
		selectable: "row",
		columns: [
			{ field: "idx", title: "Job No", width: "90px" },
			{ field: "clientID", title: "Client ID", width: "110px" },
			//{ field: "FirstName", title: "FirstName", width: "0px" },
			//{ field: "LastName", title: "LastName",width: "0px" },
			{ field: "fullName", title: "Name",width: "100px" },
			//{ field: "addr1", title: "Address",width: "0px" },
			{ field: "fullAddr", title: "Address",width: "100px" },
			//{ field: "city", title: "City",width: "0px" },
			//{ field: "state", title: "State",width: "0px" },
			//{ field: "zipcode", title: "zipcode",width: "0px" },
			{ field: "phone1", title: "phone1",width: "110px" },
			{ field: "phone2", title: "phone2",width: "110px" },
			{ field: "phone3", title: "phone3",width: "110px" },
			{ field: "moveDate", title: "moveDate",width: "120px" },
			{ field: "gpsLat", title: "gpsLat",width: "60px" },
			{ field: "gpsLog", title: "gpsLog",width: "60px" }
		], change: onChangeGrid1
	});
	dGrid1 = $("#divGrid1").data("kendoGrid");
	
	var dt = dateTime2('s');
	document.getElementById("divGrid1_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt+'</meta><span class="pull-right"><p>ready</p></span>';
	// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, fullName, fullAddr, franID
	
	function onChangeGrid1(e) {
		//alert("OK");
		// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
		//Selecting Grid
		//var gview = $("#grid").data("kendoGrid");
		//Getting selected item
		var selectedItem = dGrid1.dataItem(dGrid1.select());
		//accessing selected rows data 
		//alert(selectedItem.fullName);	
	}
	// end grid 1
	
	// edit model and columns
	$("#divGrid2").kendoGrid({
		dataSource: dSource2(),
			schema: {
				model: {
					fields: {
						Name: { type: "string" },
						Phone: { type: "string" }
					}
				}
			},
		
		pageSize: 20,
		height: 250,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: true,
		//pageable: {
			//input: true,
			//numeric: false
		//},
		columns: [
			{ field: "Name", title: "Name", width: "60px" },
			{ field: "Phone", title: "Phone", width: "70px" }
		]
	});
	dGrid2 = $("#divGrid2").data("kendoGrid");
	var dt2 = dateTime2('s');
	document.getElementById("divGrid2_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
	
	// end grid 2
	
				
		/*
		// OK
		kendo.alert("String to alert");
		kendo.confirm("Continue?");
		kendo.prompt("enter value", "123"); //123 is the default value
		
		kendo.confirm("Continue?")
		.done(function() { console.log("Ok") })
		.fail(function() { console.log("Cancel") });
		kendo.prompt("enter value")
		.done(function(value) { console.log(value); })
		.fail(function() { console.log("Cancel") });
	
		*/

		//setTimeout(a_pg1_init, 300);// calling newly loaded page
		//document.getElementById("demo").innerHTML = cUserName;
		
		//document.getElementById("tabstrip").style.visibility = "visible"; //object.style.visibility = "visible|hidden|collapse|initial|inherit"

	// each dialog and its content here
	/*
	// test dialog
	var dialog_1_content = "<p>...A new version of <strong>Kendo UI</strong> is available. Would you like to download and install it now?<p>";
	$("#dialog_1").kendoDialog({
		width: "400px",
		title: "Software Update",
		buttonLayout: "stretched",
		visible: false,
		content: dialog_1_content,
		actions: [
			{ 	text: 'Skip this version' },
			{ 	text: 'Remind me later' },
			{
				text: 'Install update',
				primary: true,
				action: function (e) {
					alert("Install update action was clicked");
					// Returning false will prevent the closing of the dialog
					return true;
				},
			}
		],
	});
	// end of the above dialog
	*/

}
/* end initKendoCtrls() */

function sec_func() {

	document.getElementById("secAAA_hdr").innerHTML = "EDSIII (07:30 AM)";
	document.getElementById("secAAA_content").innerHTML = "<p> Welcome to my world AAA.</p>";
	
	document.getElementById("secBBB_hdr").innerHTML = "EDSIII";
	document.getElementById("secBBB_content").innerHTML = "<p> Welcome to my world BBB.</p>";
	
	document.getElementById("secCCC_hdr").innerHTML = "EDSIII";
	document.getElementById("secCCC_content").innerHTML = "<p> Welcome to my world CCC.</p>";
	
	document.getElementById("secDDD_hdr").innerHTML = "EDSIII";
	document.getElementById("secDDD_content").innerHTML = "<p> Welcome to my world DDD.</p>";
	
	document.getElementById("secEEE_hdr").innerHTML = "EDSIII";
	document.getElementById("secEEE_content").innerHTML = "<p> Welcome to my world EEE.</p>";
}

function upDate_notifications() {
	document.getElementById("notifications-messages").innerHTML = "9";
	document.getElementById("notifications-alerts").innerHTML = "8";
	document.getElementById("notifications-tasks").innerHTML = "7";
}

function showAlertBar(s,x){
	//alert("showAlerts()");
	// alert-info  alert-success  alert-warning  alert-danger
	var str1= "";
	switch(x) {
		case '1':
			str1 += '<div class="alert alert-info alert-dismissable">';
		break;
		case '2':
			str1 += '<div class="alert alert-success alert-dismissable">';
		break;
		case '3':
			str1 += '<div class="alert alert-warning alert-dismissable">';
		break;
		case '4':
			str1 += '<div class="alert alert-danger alert-dismissable">';
		break;
		default:
			str1 += '<div class="alert alert-info alert-dismissable">';
		break;
	};
	//str1 += '<div class="alert alert-info alert-dismissable">';
	str1 += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
	str1 += '<i class="fa fa-info-circle"></i>  <strong>'+s+'</strong>';
	str1 += '</div>';
	$("#myAlertBar").html(str1);
	window.setTimeout(function() {
		$(".alert").fadeTo(1000, 0).slideUp(500, function(){
			$(this).remove(); 
		});
	}, 4000);	
	
}

function showAlerts() {
	//alert("showAlerts()");
	// open window
	a_window_alerts();
}

/*
//ALERTS
// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts
// alerts update/query
	var alertsSend = [];
	alertsSend[0] = 'Hello World 3';
	alertsSend[1] = "PENDING";
	alertsSend[2] = 6;
	alertsSend[3] = 2;// idx
	alertsSend[4] = 'X';// I,U,D,X
	var aData = {franID:'GD00KS',cid:'0532',aDesc:alertsSend[0],aStatus:alertsSend[1],aLevel:alertsSend[2],idx:alertsSend[3],mode:alertsSend[4]};
	getAlerts(aData);
	// end alerts

// alerts insert/query
	// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts
	var alertsSend = [];
	alertsSend[0] = 'Hello World 11';//aDesc
	alertsSend[1] = "PENDING";//aStatus
	alertsSend[2] = 4;//aLevel
	alertsSend[3] = 2;// idx
	alertsSend[4] = 'I';//mode I,U,D,X
	alertsSend[5] = dateTime2("dt"); //"2018-08-09 09:20:05";//aDateTime
	alertsSend[6] = "SYSTEM";//aFrom
	
	var aData = {afranID:'GD00KS',cid:'0532',aDesc:alertsSend[0],aStatus:alertsSend[1],aLevel:alertsSend[2],idx:alertsSend[3],mode:alertsSend[4],aDateTime:alertsSend[5],aFrom:alertsSend[6]};
	getAlerts(aData);
	// end alerts
	
*/

function showTasks() {
	//alert("showTasks()");
	// open window
	a_window_tasks();
}

// SET KENDO DATASOURCE	
	// grid 1
	function dSource1() {
		
		//var dataSource= new kendo.data.SchedulerDataSource({
		  //data: [
			  //{id: 2,start: new Date("2018/8/6 10:15 AM"),end: new Date("2018/8/6 12:30 PM"),title: "Demo" }
		  //]
		//});
		
		
		//var i;
		//for (i = 0; i < 1; i++) {
			
		// OK
		//var dataSource = new kendo.data.SchedulerDataSource();
		//dataSource.add({id: 3,start: new Date("2018/8/8 10:15 AM"),end: new Date("2018/8/8 12:30 PM"),title: "Demo" });
		//dataSource.add({id: 3,start: new Date("2018/8/7 10:15 AM"),end: new Date("2018/8/7 12:30 PM"),title: "Demo" });
		//return dataSource;
		
		//alert(job1Data.length);
		//var dataSource = new kendo.data.SchedulerDataSource();
		var dataSource = new kendo.data.DataSource();
		var i;
		for (i = 0; i < job1Data.length; i++) {
			// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, franID
			//dataSource.add({idx: job1Data[i].idx, clientID: job1Data[i].clientID, zipcode: job1Data[i].zipcode, phone1: job1Data[i].phone1 });
			var gps1=[];
			var st = job1Data[i].gpsLoc;
			gps1 = st.split("|");
			//alert(gps1[0]+" : "+gps1[1]);
			dataSource.add({idx: job1Data[i].idx,
				clientID: job1Data[i].clientID,			
				FirstName: job1Data[i].FirstName, 
				LastName: job1Data[i].LastName, 
				addr1: job1Data[i].addr1, 
				city: job1Data[i].city,
				state: job1Data[i].state,
				zipcode: job1Data[i].zipcode,
				phone1: formatPhoneNumber( job1Data[i].phone1 ),
				phone2: formatPhoneNumber( job1Data[i].phone2 ),
				phone3: formatPhoneNumber( job1Data[i].phone3 ),
				fullName: job1Data[i].FirstName+" "+job1Data[i].LastName,
				fullAddr: job1Data[i].addr1+" "+job1Data[i].city+" "+job1Data[i].state+" "+job1Data[i].zipcode,
				gpsLat: gps1[0],
				gpsLog: gps1[1]
			});
		};

		return dataSource;
		
		
	}
	
	
// END SET KENDO DATASOURCE	

// GET DATA SECTION

// ALERTS
function getAlerts(sendData) {
	// alerts insert/query
	// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts
	/*
	var alertsSend = [];
	alertsSend[0] = 'Hello World 11';//aDesc
	alertsSend[1] = "PENDING";//aStatus
	alertsSend[2] = 4;//aLevel
	alertsSend[3] = 2;// idx
	alertsSend[4] = 'I';//mode I,U,D,X
	alertsSend[5] = dateTime2("dt"); //"2018-08-09 09:20:05";//aDateTime
	alertsSend[6] = "SYSTEM";//aFrom
	
	var sendData = {afranID:'GD00KS',cid:'0532',aDesc:alertsSend[0],aStatus:alertsSend[1],aLevel:alertsSend[2],idx:alertsSend[3],mode:alertsSend[4],aDateTime:alertsSend[5],aFrom:alertsSend[6]};
	*/
	
	var dbParam, xmlhttp, myObj, x, txt = "";
	var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", franID);//MUST!!
	data.append("cid", cid);//MUST!!
	data.append("mode", "x");//MUST!!
	data.append("userID", cUserID);//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			dtAlerts = myObj;
			/*
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";
				//alert(myObj[x].aFrom+' : '+myObj[x].aDesc);
				i2++;
			};
			*/
		};
	};

	//xmlhttp.open("GET", "./scripts/dt_alerts.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/dt_alerts.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  console.log("The transfer is complete.");
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
		document.getElementById("notifications-alerts").innerHTML = dtAlerts.length;		
		//$("#divGrid1").data("kendoGrid").refresh();	
		//$('#divGrid2').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  console.log("The transfer has been canceled by the user.");
	}

	/*
	//var d = 'Hello World';
	//var d2 = "PENDING";
	//var d3 = 6;
	//var d4 = 2;
	
	//var aData = {franID:'GD00KS',cid:'0532',aDesc:d,aStatus:d2,aLevel:d3,idx:d4,mode:'U'}
	//var aData = "";
	// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel

	
	//dtAlerts = [];
	//var aData = {franID:'GD00KS',cid:'0532', mode:'X'};
	
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/dt_alerts.php", 
		//data: {franID:'GD00KS',cid:'0532', mode:'X'},
		data: aData,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						dtAlerts.push(data[i]);						
					};
					//set count 
					document.getElementById("notifications-alerts").innerHTML = dtAlerts.length;
				break;
				case 'ERROR':
					//alert("No Alerts records found");
					showAlertBar("No Alerts records found!",3);
					//set count 
					document.getElementById("notifications-alerts").innerHTML = 0;
				break;
				case 'SECURITY ERROR':
					alert("Alerts SECURITY ERROR");
					//set count 
					document.getElementById("notifications-alerts").innerHTML = 0;
					showAlertBar("SECURITY ERROR!",4);
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			showAlertBar("Alerts State Data Error:1 "+textStatus+" "+error,4);
		}
	});
	*/
	
}
// END Alerts

// TASKS
function getTasks(aData) {
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/dt_tasks.php", 
		//data: {franID:'GD00KS',cid:'0532', mode:'X'},
		data: aData,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						dtTasks.push(data[i]);						
					};
					//set count 
					document.getElementById("notifications-tasks").innerHTML = dtTasks.length;
				break;
				case 'ERROR':
					//alert("No Alerts records found");
					showAlertBar("No Alerts records found!",3);
					//set count 
					document.getElementById("notifications-tasks").innerHTML = 0;
				break;
				case 'SECURITY ERROR':
					alert("Alerts SECURITY ERROR");
					//set count 
					document.getElementById("notifications-tasks").innerHTML = 0;
					showAlertBar("SECURITY ERROR!",4);
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			showAlertBar("Tasks State Data Error:1 "+textStatus+" "+error,4);
		}
	});
}
// END TASKS

// STAFF / EMPLOYEES
// grid 2
function staffEmpRefresh() {
	getEmpData();
	//dGrid1 = $("#divGrid1").data("kendoGrid");		
	//$("#divGrid1").data("kendoGrid").refresh();	
	//$('#divGrid2').data('kendoGrid').dataSource.read();
}

function dSource2() {

	/*
	var dataSource= new kendo.data.SchedulerDataSource({
	  data: [
		  {id: 2,start: new Date("2018/8/6 10:15 AM"),end: new Date("2018/8/6 12:30 PM"),title: "Demo" }
	  ]
	});
	*/
	
	//var i;
	//for (i = 0; i < 1; i++) {
		/*
	// OK
	var dataSource = new kendo.data.SchedulerDataSource();
	dataSource.add({id: 3,start: new Date("2018/8/8 10:15 AM"),end: new Date("2018/8/8 12:30 PM"),title: "Demo" });
	dataSource.add({id: 3,start: new Date("2018/8/7 10:15 AM"),end: new Date("2018/8/7 12:30 PM"),title: "Demo" });
	return dataSource;
	*/
	
	var dataSource = new kendo.data.DataSource();
	var i;
	for (i = 0; i < allUserData.length; i++) {
		var t = formatPhoneNumber( allUserData[i].phone1 );
		dataSource.add({Name: allUserData[i].FirstName+" "+allUserData[i].LastName, Phone: t});
	};
	return dataSource;
}

function getEmpData() {
	// dSource2()		
	var dbParam, xmlhttp, myObj, x, txt = "";
	var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", "GD00KS");//MUST!!
	data.append("cid", "0532");//MUST!!
	data.append("mode", "x");//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			allUserData = myObj;
			/*
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";

				job1Data.push({idx: myObj[x].idx, 
					clientID: myObj[x].clientID, 
					FirstName: myObj[x].FirstName,
					LastName: myObj[x].LastName,
					addr1: myObj[x].addr1,
					city: myObj[x].city,
					state: myObj[x].state,
					zipcode: myObj[x].zipcode,
					phone1: myObj[x].phone1,
					phone2: myObj[x].phone2,
					phone3: myObj[x].phone3,
					fullName: myObj[x].fullName,
					fullAddr: myObj[x].fullAddr
				});
				i2++;
			};
			*/
		};
	};

	//xmlhttp.open("GET", "./scripts/dt_users.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/dt_users.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  console.log("The transfer is complete.");
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
		//dGrid1 = $("#divGrid1").data("kendoGrid");		
		//$("#divGrid1").data("kendoGrid").refresh();	
		//$('#divGrid2').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  console.log("The transfer has been canceled by the user.");
	}

	/*
	// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
	//Selecting Grid
	var gview = $("#grid").data("kendoGrid");
	//Getting selected item
	var selectedItem = gview.dataItem(gview.select());
	//accessing selected rows data 
	alert(selectedItem.email);
	*/
}
// END STAFF / EMPLOYEES


// JOBS1
function getJobs1Data() {
	// dSource1()	
	
	var dbParam, xmlhttp, myObj, x, txt = "";
	var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", "GD00KS");//MUST!!
	data.append("cid", "0532");//MUST!!
	data.append("mode", "x");//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			job1Data = myObj;
			/*
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";

				job1Data.push({idx: myObj[x].idx, 
					clientID: myObj[x].clientID, 
					FirstName: myObj[x].FirstName,
					LastName: myObj[x].LastName,
					addr1: myObj[x].addr1,
					city: myObj[x].city,
					state: myObj[x].state,
					zipcode: myObj[x].zipcode,
					phone1: myObj[x].phone1,
					phone2: myObj[x].phone2,
					phone3: myObj[x].phone3,
					fullName: myObj[x].fullName,
					fullAddr: myObj[x].fullAddr
				});
				i2++;
			};
			*/
		};
	};

	//xmlhttp.open("GET", "./scripts/dt_jobs1.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/dt_jobs1.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  console.log("The transfer is complete.");
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
		//dGrid1 = $("#divGrid1").data("kendoGrid");		
		//$("#divGrid1").data("kendoGrid").refresh();	
		//$('#divGrid1').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  console.log("The transfer has been canceled by the user.");
	}


	
	/*
	// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
	//Selecting Grid
var gview = $("#grid").data("kendoGrid");
//Getting selected item
var selectedItem = gview.dataItem(gview.select());
//accessing selected rows data 
alert(selectedItem.email);
	*/
}
// END JOBS1 

// END GET DATA SECTION

function dateTime2(a) {
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
	if ( a == 'dt') {
		rtData = curr_year+"-"+curr_month+"-"+curr_date+" "+timeF;
		//alert(rtData);
	};
	//alert(timeF+" bb started "+dateF);
	return rtData
}