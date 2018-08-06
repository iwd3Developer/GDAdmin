

/*
 * https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog
 add:
   <div id="dialog_1">
      Content of the Dialog
  </div> 
 
 */

// create this function for every dialog to be called
function a_dialog_1(){
	var dialog = $("#dialog_1").data("kendoDialog");
    dialog.open();
}

// each dialog function if required


// each dialog and its content here
var dialog_1_content = "<p>...A new version of <strong>Kendo UI</strong> is available. Would you like to download and install it now?<p>";

$("#dialog_1").kendoDialog({
      width: "400px",
      title: "Software Update",
      buttonLayout: "stretched",
      visible: false,
      content: dialog_1_content,
      actions: [
          { text: 'Skip this version' },
          { text: 'Remind me later' },
          {
              text: 'Install update',
              primary: true,
              action: function (e) {
                  alert("Install update action was clicked");
                  // Returning false will prevent the closing of the dialog
                  return true;
                },
          }
      ]
  });
// end of the above dialog

/*
//create this function for every dialog to be called
function a_dialog_2(){
	var dialog2 = $("#dialog_2").data("kendoDialog");
 dialog2.open();
}
*/
/*
//each dialog function if required
function d_2(a) {
	alert("Done "+a);
}

//each dialog and its content here
var dialog_2_content = "<p>Have A Nice Day!<p>";
$("#dialog_2").kendoDialog({
   width: "400px",
   title: "Dialog 2",
   modal: true,
   buttonLayout: "normal", //"stretched",
   visible: false,
   content: dialog_2_content,
   actions: [
       { text: 'Yes',
    	   action: function (e) {
    		   d_2('yes');
           // Returning false will prevent the closing of the dialog
           return true;
         },
       },
       { text: 'No',
    	   action: function (e) {
    		   d_2('no');
           // Returning false will prevent the closing of the dialog
           return true;
         },
       }
   ],
});
//end of the above dialog
*/


/*
// schedular

//function calX() {
	//alert("OK");
			// scheduler update
		//scheduler = $("#scheduler").data("kendoScheduler");		
		//$("#scheduler").data("kendoScheduler").refresh();	
		//$('#scheduler').data('kendoScheduler').dataSource.read();
	
function scheduler_change(e) {
	var start = e.start; //selection start date
	var end = e.end; //selection end date
	var slots = e.slots; //list of selected slots
	var events = e.events; //list of selected Scheduler events

	var message = "change:: selection from {0:g} till {1:g}";

	if (events.length) {
		message += ". The selected event is '" + events[events.length - 1].title + "'";
	}

	alert(kendo.format(message, start, end));
}

function scheduler_move(e) {
	if (roomIsOccupied(e.start, e.end, e.event, e.resources) || attendeeIsOccupied(e.start, e.end, e.event, e.resources)) {
		this.wrapper.find(".k-event-drag-hint").addClass("invalid-slot");
	}
}

function scheduler_navigate(e) {
	alert(kendo.format("navigate:: action:{0}; view:{1}; date:{2:d};", e.action, e.view, e.date));
}
	
	//"http://demos.telerik.com/kendo-ui/service/tasks",
$("#scheduler").kendoScheduler({
  date: new Date("2018/8/8"), // The current date of the scheduler
  startTime: new Date("2018/8/8 07:00 AM"),
  //date: kendo.date.today(),
  allDaySlot: false,
  height: 400,
		views: [
			"day",
			{ type: "workWeek", selected: true },
			"week",
			"month",
			"agenda",
			{ eventHeight: 50}
		],
		majorTimeHeader: "<strong>#=kendo.toString(date, 'tt')#</strong>",
		editable: {
			add: false,
			update: false,
			destroy: false
		  },
		  
		  selectable: true,
	       // dataBinding: scheduler_dataBinding,
	        //dataBound: scheduler_dataBound,
	        //save: scheduler_save,
	        //remove: scheduler_remove,
	        //edit: scheduler_edit,
	        //add: scheduler_add,
	        //cancel: scheduler_cancel,
	        change: scheduler_change,
	        //moveStart: scheduler_moveStart,
	        move: scheduler_move,
	        //moveEnd: scheduler_moveEnd,
	        //resizeStart: scheduler_resizeStart,
	        //resize: scheduler_resize,
	        //resizeEnd: scheduler_resizeEnd,
	        navigate: scheduler_navigate,
		  
		dataSource: [ // The kendo.data.SchedulerDataSource configuration
			// First scheduler event
			{
			  id: 1, // Unique identifier. Needed for editing.
			  start: new Date("2018/8/8 08:00 AM"), // Start of the event
			  end: new Date("2018/8/8 09:00 AM"), // End of the event
			  title: "Breakfast" // Title of the event
			},
			// Second scheduler event
			{
			  id: 2,
			  start: new Date("2013/6/6 10:15 AM"),
			  end: new Date("2013/6/6 12:30 PM"),
			  title: "Demo"
			}
		],
		schema: {
		  model: {
			id: "taskId",
			fields: {
			  taskId: { from: "TaskID", type: "number" },
			  title: { from: "Title", defaultValue: "No title", validation: { required: true } },
			  start: { type: "date", from: "Start" },
			  end: { type: "date", from: "End" },
			  startTimezone: { from: "StartTimezone" },
			  endTimezone: { from: "EndTimezone" },
			  description: { from: "Description" },
			  recurrenceId: { from: "RecurrenceID" },
			  recurrenceRule: { from: "RecurrenceRule" },
			  recurrenceException: { from: "RecurrenceException" },
			  ownerId: { from: "OwnerID", defaultValue: 1 },
			  isAllDay: { type: "boolean", from: "IsAllDay" }
			}
		  }
		}
 
  
});

	
function OnClientAppointmentEditing(sender, eventArgs) {   
	eventArgs.set_cancel(true);   
} 	

*/

//}

//var scheduler = $("#scheduler").data("kendoScheduler");
/*
$("#date").kendoDatePicker({
    value: new Date("2018/8/13"),
    change: function() {
        scheduler.date(this.value());
    }
});

$("#views").kendoDropDownList({
    value: scheduler.view().name,
    change: function() {
        scheduler.view(this.value());
    }
});
*/

// end
