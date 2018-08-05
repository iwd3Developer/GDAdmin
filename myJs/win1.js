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
	function onOpen_1(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_1(e) {

	}
	function onActivate_1(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win1: activate";
	}
	function onDeactivate_1(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_1(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_1(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_1(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_1(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_1() {
		var myWindow1 = $("#window_1");//,undo = $("#undo");
		/*
		myWindow.data("kendoWindow").open();
		myWindow.data("kendoWindow").close();
		myWindow.data("kendoWindow").refresh();
		myWindow.data("kendoWindow").center();
		
		*/
		
		
		
		$("#window_1").kendoWindow({
			width: "500px",
			height: "325px",
			title: "Chat Window",
			content: "./pages/page_1.html",
			visible: false,
			draggable: true,
			actions: [
				"Pin",
				"Minimize",
				"Maximize",
				"Close"
			],
			close: onClose_1,
			activate: onActivate_1,			
			open: onOpen_1,
			deactivate: onDeactivate_1,
			refresh: onRefresh_1,
			resize: onResize_1,
			dragstart: onDragStart_1,
			dragend: onDragEnd_1
						
		});//.data("kendoWindow").center().open();
		myWindow1.data("kendoWindow").center().open();
	}
	
