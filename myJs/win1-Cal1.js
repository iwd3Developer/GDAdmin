/*
 * copy this file and do the following
 *required : <div id="window_1">...............</div> 
 *global rename _1 to new name
 *edit win event as required
 *rename div tag name #window_1 to new name and myWindow1
 *edit width,height,title
 *change content and win actions as required
 *all new application function show have ????_newname
 *set top and left or center using : myWindow1.data("kendoWindow").center().open();
 *or myWindow1.data("kendoWindow").open(); using top and left
 *
 */

// win app functions
	function test_1() {
		//document.getElementById("inMsg1").innerHTML = "Hello";
	}
	

	// win event functions
	function onOpen_cal1(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_cal1(e) {

	}
	function onActivate_cal1(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win1: activate";
	}
	function onDeactivate_cal1(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_cal1(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_cal1(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_cal1(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_cal1(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_Cal1() {
		var myWindow1 = $("#window_Cal1");//,undo = $("#undo");
		/*
		myWindow.data("kendoWindow").open();
		myWindow.data("kendoWindow").close();
		myWindow.data("kendoWindow").refresh();
		myWindow.data("kendoWindow").center();
		
		*/
		
		
		
		$("#window_Cal1").kendoWindow({
			width: "500px",
			height: "325px",
			title: "Cal Window",
			content: "./pages/a_pg_cal1.html",
			visible: false,
			draggable: true,
			actions: [
				"Pin",
				"Minimize",
				"Maximize",
				"Close"
			],
			close: onClose_cal1,
			activate: onActivate_cal1,			
			open: onOpen_cal1,
			deactivate: onDeactivate_cal1,
			refresh: onRefresh_cal1,
			resize: onResize_cal1,
			dragstart: onDragStart_cal1,
			dragend: onDragEnd_cal1
						
		});//.data("kendoWindow").center().open();
		myWindow1.data("kendoWindow").center().open();
	}
	
