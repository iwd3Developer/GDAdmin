
function showMyCal(data) {
	//alert("Look "+data[0].title);
	
	function scheduler_dataBinding(e) {
        console.log("dataBinding");
    }

    function scheduler_dataBound(e) {
        console.log("dataBound");
    }

    function scheduler_save(e) {
        console.log("save");
    }

    function scheduler_remove(e) {
        console.log("remove");
    }

    function scheduler_cancel(e) {
        console.log("cancel");
    }

    function scheduler_change(e) {
        var start = e.start; //selection start date
        var end = e.end; //selection end date
        var slots = e.slots; //list of selected slots
        var events = e.events; //list of selected Scheduler events

        var message = "change:: selection from {0:g} till {1:g}";
		selectedSD = start;
		selectedED = end;
		selectedCalID = e.id;
        if (events.length) {
			// entry exists
            message += ". The selected event is '" + events[events.length - 1].title + "'";
			selectedSD = start;
			selectedED = end;
			//alert( selectedSD+" : "+ selectedED );
			a_window_Cal1();
        }else{
			//alert("None "+selectedSD+" : "+ selectedED);
		};
		
		if(scheduler.viewName() == "month"){
				//scheduler.editEvent(event);
				//alert("True");
		}else{
				//alert("False");
        };
		  
        //if (events.length) {
            //message += ". The selected event is '" + events[events.length - 1].title + "'";
        //}

        console.log(kendo.format(message, start, end));
    }

    function scheduler_edit(e) {
        console.log("edit");
    }

    function scheduler_add(e) {
        console.log("add");
    }

    function scheduler_moveStart(e) {
        console.log("moveStart");
    }

    function scheduler_move(e) {
        console.log("move");
    }

    function scheduler_moveEnd(e) {
        console.log("moveEnd");
    }

    function scheduler_resizeStart(e) {
        console.log("resizeStart");
    }

    function scheduler_resize(e) {
        console.log("resize");
    }

    function scheduler_resizeEnd(e) {
        console.log("resizeEnd");
    }

    function scheduler_navigate(e) {
        console.log(kendo.format("navigate:: action:{0}; view:{1}; date:{2:d};", e.action, e.view, e.date));
    }

    $("#scheduler").kendoScheduler({
        date: new Date("2018/9/13"),
        startTime: new Date("2018/9/13 7:00"),
        height: 600,
        views: [
            "day",
            { type: "week", selected: true },
            "month",
            "agenda",
            "timeline"
        ],
        selectable: true,
        //dataBinding: scheduler_dataBinding,
        //dataBound: scheduler_dataBound,
        save: scheduler_save,
        remove: scheduler_remove,
        edit: scheduler_edit,
        add: scheduler_add,
        cancel: scheduler_cancel,
        change: scheduler_change,
        moveStart: scheduler_moveStart,
        move: scheduler_move,
        moveEnd: scheduler_moveEnd,
        resizeStart: scheduler_resizeStart,
        resize: scheduler_resize,
        resizeEnd: scheduler_resizeEnd,
        //navigate: scheduler_navigate,
		dataSource: data,
            schema: {
                model: {
                    id: "taskID",
                    fields: {
                        taskID: { from: "TaskID", type: "number" },
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

	
	//$("#scheduler").data("kendoScheduler").refresh();	
	//$('#scheduler').data('kendoScheduler').dataSource.read();
	scheduler = $("#scheduler").data("kendoScheduler");
	/*
	$("#create").click(function() {
	  $("#scheduler").data("kendoScheduler").addEvent({
		start: new Date("2013/6/13"),
		end: new Date("2013/6/13")
	  });
	});
	*/
	
		
	/*
		$("#scheduler").data("kendoScheduler").refresh();	
		//$('#scheduler').data('kendoScheduler').dataSource.read();	
	*/

}


function showMyCal2(data2,d) {
	alert("showMyCal2 ");

		$("#scheduler").kendoScheduler({
		  date: new Date(), //"2017/10/18 09:00 AM"), // The current date of the scheduler
		   //workDayStart: new Date("2017/10/18 09:00 AM"),
		   //workDayEnd: new Date("2017/10/18 09:00 PM"),
		  //date: kendo.date.today(),
		  //height: 550,
			views: [
				"month",				
				//{ type: "workWeek", selected: true },
				{ type: "month", selected: true },
				"day",
				"week",
				
				"agenda",
				{ eventHeight: 50}
			],
			
			selectable:true,
			
			majorTimeHeader: "<strong>#=kendo.toString(date, 'tt')#</strong>",
			editable: {
				add: true,
				update: true,
				destroy: false,
				edit: true
			  },
			
			resizeEnd: function(e) {
				if (!checkAvailability(e.start, e.end, e.events)) {
					e.preventDefault();
				}
			},
			move: function(e) {
				e.preventDefault();
				//if (roomIsOccupied(e.start, e.end, e.event, e.resources) || attendeeIsOccupied(e.start, e.end, e.event, e.resources)) {
					//this.wrapper.find(".k-event-drag-hint").addClass("invalid-slot");
				//}
			},
			moveEnd: function(e) {
				//if (!checkAvailability(e.start, e.end, e.event, e.resources)) {
					//e.preventDefault();
				//}
				e.preventDefault();
				//if (!checkAvailability(e.start, e.end, e.event, e.resources)) {
				//var oldAttendees = e.event.attendees;
				//var attendees = e.resources.attendees;

				  //attendees.splice(0, attendees.length); //empty resources;

				  //for (var idx = 0; idx < oldAttendees.length; idx++) {
					//attendees.push(oldAttendees[idx]);
				  //}
				alert(oldAttendees+" MoveEnd "+attendees);
				//};
				  
			},
			add: function(e) {
				//if (!checkAvailability(e.event.start, e.event.end, e.event)) {
					//e.preventDefault();
				//}
				e.preventDefault();
				alert(e.event.start+" Add "+e.event.end);
				//var x = [];
				//x.push({"startD": e.event.start, "endD": e.event.end});
				//myWinX("Win Title","content","I",x);
			},
			save: function(e) {
				if (!checkAvailability(e.event.start, e.event.end, e.event)) {
					e.preventDefault();
					alert("Save");
				}
			}, 
			edit: function(e) {
				//if (!checkAvailability(e.event.start, e.event.end, e.event)) {
					//e.preventDefault();
				//}
				//console.log("Editing", e.event.title);
				//var x = e;
				e.preventDefault();
				alert(e.event.start+" Edit "+e.event.end+"  "+e.event.id);
				//alert(e.event.id+" Edit " + e.event.start+" T:"+e.event.title+" F:"+e.event.franID+" X:"+e.event.taskId+" "+e.event.description);
				//myWinX("TITLE-HERE","xx","U",e.event.id,e.event.start,e.event.end);// send data to window
				//myWinX("TITLE-HERE","xx","U",e.event.id,e.event.start,e.event.end);
				//getNewCalData("U",e.event.id);
				//alert(e.event.id+" Edit " + e.event.start+" T:"+e.event.title+" F:"+e.event.franID+" X:"+e.event.taskId+" "+e.event.description);
			},

			change: function(e) {
				e.preventDefault();
				//alert(e.event.start+" Change "+e.event.end+"  "+e.event.id);
				
				//var idx = e.events[0].id;
				//var start = e.startD;
				//var end = e.endD;
				//var desc = e.events[0].description;
				//var t = e.events[0].title;
				//alert(desc+" Look: "+t);
				
				//e.events[0].title

				//alert(desc+" :: "+kendo.format("Selection between {0:g} and {1:g}", start, end) );
			},
			
			messages: {
				showWorkDay: "Show work hours"
			},

			
			dataSource: data2,
			schema: {
			  model: {
				id: "id",
					fields: {
					  taskId: { from: "taskId" },
					  title: { from: "title" },
					  startD: { type: "date", from: "startD" },
					  endD: { type: "date", from: "endD" },
					  
					  startTimezone: { from: "StartTimezone" },
					  endTimezone: { from: "EndTimezone" },
					  
					  description: { from: "description" },
					  recurrenceId: { from: "RecurrenceID" },
					  recurrenceRule: { from: "RecurrenceRule" },
					  recurrenceException: { from: "RecurrenceException" },
					  franID: { from: "franID" },
						isAllDay: { type: "boolean", from: "IsAllDay",
							status: { from: "status" }
						}
					}
				}
			}

		});

		scheduler = $("#scheduler").data("kendoScheduler");
		
		/*
			$("#scheduler").data("kendoScheduler").refresh();	
			//$('#scheduler').data('kendoScheduler').dataSource.read();	
		*/
		// alert("showCal: "+data2.length);
}; // cal
/*
function getAllEntryX(g) {
	//var cid = '0532';
	var rtData = [];
	// EDIT
	 var data = {
      'loginName': 'joel',
	  'pwd':'none',
	  'franID':'none',
	  'cid':'0532'
    };
    //data = $(this).serialize() + "&" + $.param(data);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/calendarFull.php", 
		//data: { },  
		//data: data,
		data: g, //{'cid': cid, mode: "G", 'franID':'GD00KS', id:0 },
		success: function (data) { 
			//alert("getAllEntry: "+data.length);
			alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						rtData.push({
							id: data[i].id,
							taskId: data[i].taskId,
							title: data[i].title,
							start: new Date(data[i].startD),
							end: new Date(data[i].endD),			  
							startTimezone: null,
							endTimezone: null,
							description: data[i].description,
							recurrenceId: null,
							recurrenceRule: null,
							recurrenceException: null,
							franID: data[i].franID,
							isAllDay: data[i].isAllDay
						});
						//alert("X "+rtData[i].id);
					};
					calCurrentData = [];
					calCurrentData = rtData;
					//showCal(rtData,i);
					showMyCal();
				break;
				case 'ERROR':
					alert("No records found");
					//return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					//return_fuction(rtData,1,data);// 0=ok,1-security,2=no records
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			alert("Error:1 "+textStatus+" "+error);
		}
	});

}
*/