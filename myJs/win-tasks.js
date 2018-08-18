/*
 * copy this file and do the following
 *required : <div id="window_tasks">...............</div> 
 *global rename _5 to new name
 *edit win event as required
 *rename div tag name #window_tasks to new name and myWindow5
 *edit width,height,title
 *change content and win actions as required
 *all new application function show have ????_newname
 *
 */

// win app functions
	
	// win event functions
	function onOpen_5(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_5(e) {

	}
	function onActivate_5(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win2: activate";
	}
	function onDeactivate_5(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_5(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_5(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_5(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_5(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_tasks() {
		var myWindow5 = $("#window_tasks");//,undo = $("#undo");
		/*
		myWindow.data("kendoWindow").open();
		myWindow.data("kendoWindow").close();
		myWindow.data("kendoWindow").refresh();
		myWindow.data("kendoWindow").center();
		
		*/
		
		$("#window_tasks").kendoWindow({
			width: "550px",
			height: "300px",
			position: {
	            top: 160,
				left: 245
	          },
			title: "TASKS",
			content: "./pages/a_pg-tasks.html",
			visible: false,
			draggable: true,
			modal: false,
			scrollable: false,
			actions: [
				//"Pin",
				//"Minimize",
				//"Maximize",
				"Close"
			],
			close: onClose_5,
			activate: onActivate_5,			
			open: onOpen_5,
			deactivate: onDeactivate_5,
			refresh: onRefresh_5,
			resize: onResize_5,
			dragstart: onDragStart_5,
			dragend: onDragEnd_5
						
		});//.data("kendoWindow").center().open();
		//myWindow5.data("kendoWindow").center().open();
		myWindow5.data("kendoWindow").open();
	}
	/*
	INSERT INTO `tasks` (`idx`, `tDecs`, `tUserID`, `tStatus`, `tDateTimeIn`, `tCompDateTime`, `tCompleteBy`, `tFranID`, `tFlg1`) VALUES (NULL, 'Demo 1', '0', 'PENDINg', '2018-08-12 04:35:07', '2018-08-12 03:26:12', '2018-08-13 06:38:16', 'GD00KS', '0');
	
	INSERT INTO `tasks` (`idx`, `tDesc`, `tUserID`, `tStatus`, `tDateTimeIn`, `tCompDateTime`, `tCompleteBy`, `tFranID`, `tFlg1`) VALUES (NULL, 'Demo 2', '0', 'PENDINg', '2018-08-12 04:35:07', '2018-08-12 03:26:12', '2018-08-13 06:38:16', 'GD00KS', '0'); 
	*/
