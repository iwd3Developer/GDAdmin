/*
 * copy this file and do the following
 *required : <div id="window_alerts">...............</div> 
 *global rename _4 to new name
 *edit win event as required
 *rename div tag name #window_alerts to new name and myWindow4
 *edit width,height,title
 *change content and win actions as required
 *all new application function show have ????_newname
 *
 */

// win app functions
	
	// win event functions
	function onOpen_4(e) {
		//kendoConsole.log("event :: open");
	}
	function onClose_4(e) {
		alertsWin = false;
	}
	function onActivate_4(e) {
		//alert("event :: activate");
		 //document.getElementById("inMsg1").innerHTML = "event :win2: activate";
	}
	function onDeactivate_4(e) {
		//kendoConsole.log("event :: deactivate");
	}
	function onRefresh_4(e) {
		//kendoConsole.log("event :: refresh");
	}
	function onResize_4(e) {
		//kendoConsole.log("event :: resize");
	}
	function onDragStart_4(e) {
		//kendoConsole.log("event :: dragstart");
	}
	function onDragEnd_4(e) {
		//kendoConsole.log("event :: dragend");
	}
	
	function a_window_alerts() {
		if ( alertsWin == false ) {
			var myWindow4 = $("#window_alerts");//,undo = $("#undo");
			/*
			myWindow.data("kendoWindow").open();
			myWindow.data("kendoWindow").close();
			myWindow.data("kendoWindow").refresh();
			myWindow.data("kendoWindow").center();
			
			*/
			alertsWin = true;
			$("#window_alerts").kendoWindow({
				width: "550px",
				height: "270px",
				position: {
					top: 160,
					left: 245
				  },
				title: "ALERTS",
				content: "./pages/a_pg-alerts.html",
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
				close: onClose_4,
				activate: onActivate_4,			
				open: onOpen_4,
				deactivate: onDeactivate_4,
				refresh: onRefresh_4,
				resize: onResize_4,
				dragstart: onDragStart_4,
				dragend: onDragEnd_4
							
			});//.data("kendoWindow").center().open();
			//myWindow4.data("kendoWindow").center().open();
			myWindow4.data("kendoWindow").open();
		}else{
			showAlertBar("Alert Window Already Open!",3);
		};
	}
	
	function a_window_alerts_edit() {
		var myWindow4 = $("#window_alerts");//,undo = $("#undo");
		/*
		myWindow.data("kendoWindow").open();
		myWindow.data("kendoWindow").close();
		myWindow.data("kendoWindow").refresh();
		myWindow.data("kendoWindow").center();
		
		*/
		
		$("#window_alerts").kendoWindow({
			width: "550px",
			height: "270px",
			position: {
	            top: 60,
	            left: 100
	          },
			title: "ALERTS",
			content: "./pages/a_pg-alerts.html",
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
			close: onClose_4,
			activate: onActivate_4,			
			open: onOpen_4,
			deactivate: onDeactivate_4,
			refresh: onRefresh_4,
			resize: onResize_4,
			dragstart: onDragStart_4,
			dragend: onDragEnd_4
						
		});//.data("kendoWindow").center().open();
		//myWindow4.data("kendoWindow").center().open();
		myWindow4.data("kendoWindow").open();
	}
	
