
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
		height: 550,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "130px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "130px" },
			{ field: "Discontinued", width: "130px" }
		]
	});
	
	// end grid
				
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