
function initKendoCtrls() {
	// init telerick controls
	// create Calendar from div HTML element
			
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
	showHideTab();
	
	 //calX();
	 
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
	$("#calendar1").kendoCalendar({
		value: today,
		dates: events,
		weekNumber: true,
		//width:250, height:130,
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
	});
	
	
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
	
	// grid 1
	function dSource1() {

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
		
		var dataSource = new kendo.data.SchedulerDataSource();
		var i;
		for (i = 0; i < 6; i++) {
			dataSource.add({ProductName: "AAAA",UnitPrice: "$4.99",UnitsInStock: 3, Discontinued: i });
		};
		return dataSource;
		
		
	}
	// edit model and columns
	$("#divGrid1").kendoGrid({
		dataSource: dSource1(),
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
		
		pageSize: 20,
		height: 150,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "100px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "100px" },
			{ field: "Discontinued", width: "130px" }
		]
	});
	
	// end grid 1
	
	// grid 2
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
		
		var dataSource = new kendo.data.SchedulerDataSource();
		var i;
		for (i = 0; i < 16; i++) {
			dataSource.add({ProductName: "AAAA",UnitPrice: "$4.99"});
		};
		return dataSource;
		
		
	}
	// edit model and columns
	$("#divGrid2").kendoGrid({
		dataSource: dSource2(),
			schema: {
				model: {
					fields: {
						ProductName: { type: "string" },
						UnitPrice: { type: "number" }
					}
				}
			},
		
		pageSize: 20,
		height: 250,
		scrollable: true,
		sortable: true,
		filterable: true,
		//pageable: {
			//input: true,
			//numeric: false
		//},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "100px" }
		]
	});
	
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

function getAlerts(aData) {
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