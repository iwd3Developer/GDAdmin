/*
 * copy this file and do the following
 *required : <div id="window_admin">...............</div> 
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
		//kendo//console.log("event :: open");
	}
	function onClose_h(e) {
		windowsAdmin = false;//EDS
		//windowsAdmin = false;//EDS
	}
	function onActivate_h(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win2: activate";
	}
	function onDeactivate_h(e) {
		//kendo//console.log("event :: deactivate");
	}
	function onRefresh_h(e) {
		//kendo//console.log("event :: refresh");
	}
	function onResize_h(e) {
		//kendo//console.log("event :: resize");
	}
	function onDragStart_h(e) {
		//kendo//console.log("event :: dragstart");
	}
	function onDragEnd_h(e) {
		//kendo//console.log("event :: dragend");
	}
	
	function a_window_admin(aTitle, aContent, aW, aH, aT, aL) {
		if ( windowsAdmin == false ) {
			windowsAdmin = true;
			var myWindow3 = $("#window_admin");//,undo = $("#undo");
			/*
			myWindow.data("kendoWindow").open();
			myWindow.data("kendoWindow").close();
			myWindow.data("kendoWindow").refresh();
			myWindow.data("kendoWindow").center();
			
			*/
			
			$("#window_admin").kendoWindow({
				width: aW,
				height: aH,
				position: {
					top: aT,
					left: aL
				  },
				title: aTitle,
				content: "./pages/" + aContent,
				visible: false,
				draggable: true,
				modal: true,
				scrollable: false,
				actions: [
					"Pin",
					"Minimize",
					"Maximize",
					"Close"
				],
				close: onClose_h,
				activate: onActivate_h,			
				open: onOpen_h,
				deactivate: onDeactivate_h,
				refresh: onRefresh_h,
				resize: onResize_h,
				dragstart: onDragStart_h,
				dragend: onDragEnd_h
							
			});//.data("kendoWindow").center().open();
			//myWindow3.data("kendoWindow").center().open();
			myWindow3.data("kendoWindow").open();
		}else{
			alert("Help Already Open!");
			//windowsAddJobs = true;
		};
	}

	
