

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
		width:200, height:200,
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

}