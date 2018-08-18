/*
 * copy this file and do the following
 *required : <div id="window_jobs">...............</div> 
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
	function onOpen_3(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_3(e) {
		windowsAddJobs = false;
	}
	function onActivate_3(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win2: activate";
	}
	function onDeactivate_3(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_3(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_3(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_3(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_3(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_newJob() {
		if ( windowsAddJobs == false ) {
			windowsAddJobs = true;
			var myWindow3 = $("#window_jobs");//,undo = $("#undo");
			/*
			myWindow.data("kendoWindow").open();
			myWindow.data("kendoWindow").close();
			myWindow.data("kendoWindow").refresh();
			myWindow.data("kendoWindow").center();
			
			*/
			
			$("#window_jobs").kendoWindow({
				width: "800px",
				height: "720px",
				position: {
					top: 100,
					left: 250
				  },
				title: "Add New Job",
				content: "./pages/a_pg_addJob.html",
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
			alert("Create New Jobs Already Open!");
			//windowsAddJobs = true;
		};
	}
	
