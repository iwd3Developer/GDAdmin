/*
 * copy this file and do the following
 *required : <div id="window_help">...............</div> 
 *global rename _3 to new name
 *edit win event as required
 *rename div tag name #window_jobs to new name and myWindow3
 *edit width,height,title
 *change content and win actions as required
 *all new application function show have ????_newname
 *
 */

// win app functions
	
	// win event functions
	function onOpen_h(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_h(e) {
		windowsHelp = false;
	}
	function onActivate_h(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win2: activate";
	}
	function onDeactivate_h(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_h(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_h(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_h(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_h(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_help() {
		if ( windowsHelp == false ) {
			windowsHelp = true;
			var myWindow3 = $("#window_help");//,undo = $("#undo");
			/*
			myWindow.data("kendoWindow").open();
			myWindow.data("kendoWindow").close();
			myWindow.data("kendoWindow").refresh();
			myWindow.data("kendoWindow").center();
			
			*/
			
			$("#window_help").kendoWindow({
				width: "800px",
				height: "380px",
				position: {
					top: 200,
					left: 350
				  },
				title: "Administration Help",
				content: "./pages/a_help1.html",
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
				close: onClose_3,
				activate: onActivate_3,			
				open: onOpen_3,
				deactivate: onDeactivate_3,
				refresh: onRefresh_3,
				resize: onResize_3,
				dragstart: onDragStart_3,
				dragend: onDragEnd_3
							
			});//.data("kendoWindow").center().open();
			//myWindow3.data("kendoWindow").center().open();
			myWindow3.data("kendoWindow").open();
		}else{
			alert("Help Already Open!");
			//windowsAddJobs = true;
		};
	}
	