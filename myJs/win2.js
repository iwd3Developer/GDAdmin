/*
 * copy this file and do the following
 *required : <div id="window_2">...............</div> 
 *global rename _2 to new name
 *edit win event as required
 *rename div tag name #window_2 to new name and myWindow2
 *edit width,height,title
 *change content and win actions as required
 *all new application function show have ????_newname
 *
 */

// win app functions
	function test_2() {
		//document.getElementById("inMsg1").innerHTML = "Hello 2";
	}
	

	// win event functions
	function onOpen_2(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_2(e) {

	}
	function onActivate_2(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win2: activate";
	}
	function onDeactivate_2(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_2(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_2(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_2(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_2(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_2() {
		var myWindow2 = $("#window_2");//,undo = $("#undo");
		/*
		myWindow.data("kendoWindow").open();
		myWindow.data("kendoWindow").close();
		myWindow.data("kendoWindow").refresh();
		myWindow.data("kendoWindow").center();
		
		*/
		
		$("#window_2").kendoWindow({
			width: "250px",
			height: "150px",
			position: {
	            top: 60,
	            left: 100
	          },
			title: "WINDOW 2..",
			content: "./pages/page_2.html",
			visible: false,
			draggable: true,
			modal: false,
			scrollable: false,
			actions: [
				"Pin",
				"Minimize",
				"Maximize",
				"Close"
			],
			close: onClose_2,
			activate: onActivate_2,			
			open: onOpen_2,
			deactivate: onDeactivate_2,
			refresh: onRefresh_2,
			resize: onResize_2,
			dragstart: onDragStart_2,
			dragend: onDragEnd_2
						
		});//.data("kendoWindow").center().open();
		//myWindow2.data("kendoWindow").center().open();
		myWindow2.data("kendoWindow").open();
	}
	
