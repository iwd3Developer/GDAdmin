//getMyCalData(userID);

/*	
	function getMyCalDataX(userID) {
		
		//readyState	Holds the status of the XMLHttpRequest. Changes from 0 to 4: 
		//0: request not initialized 
		//1: server connection established
		//2: request received 
		//3: processing request 
		//4: request finished and response is ready
		//status	200: "OK"
		//404: Page not found
		
		var str1 ;
		var cnt = 0;
		var items = [];
		// Create our XMLHttpRequest object
		var hr = new XMLHttpRequest();
		// Create some variables we need to send to our PHP file
		var url = "Scripts/mainCal.php";
		var fn = userID;//document.getElementById("first_name").value;
		//var ln = "password";//document.getElementById("last_name").value;
		var vars = "userID="+fn;
		hr.open("POST", url, true);
		// Set content type header information for sending url encoded variables in the request
		hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// Access the onreadystatechange event for the XMLHttpRequest object
		hr.onreadystatechange = function() {
			if(hr.readyState == 4 && hr.status == 200) {
				var return_data = hr.responseText;
				var myObject = JSON.parse(return_data);
				cnt = myObject.length;
				//alert(myObject[0].userName+" Form submitted successfully.\nReturned json: " + return_data+" :: "+cnt);				
				$.each( myObject, function ( i, val ) {
					items.push(val);// load array here
				});			
				for (i = 0; i < items.length; i++) {					
					str2.push({id: items[i].userId, start: new Date(items[i].start), end: new Date(items[i].end), title: items[i].title, description: items[i].description, dte1: items[i].start});				  
				};
				
				showCal(calDte);//("2013/6/6"); //(calDte)	
				showJobs(str2);
			}
			if( hr.responseText == '[]') {
				alert("No Data found "+hr.readyState+"::"+hr.status+" oops "+hr.statusText+" "+hr.responseText);
			};
			
			showWindow1("winJs/page1.html","WINDW 1");
			showWindow2("winJs/page2.html","WINDW 2");
			showWindow3("winJs/training.html","On-Line Help/Training");
		}
		try{
			// Send the data to PHP now... and wait for response to update the status div
			hr.send(vars); // Actually execute the request
		}catch(err){
            alert( "\nXMLHttprequest error: " + err.description);
			//this prints "XMLHttprequest error: undefined" in the body.
        };
	}
	

function getMyCalData(theData) {
	//alert("DD "+theData);
	var a = 'GD00KS';
	var b = '0532';
	$.ajax({
		url: './scripts/calendar1.php',
		type: 'POST',
		data: theData,
		dataType: 'json',
		cache: false,
		success: CalData_success,
		async:true,
		error: CalData_error
	});
}
function CalData_success(data) {
	//var myArray = data;
	//var rtData = [];   
	for (var i=0;i<data.length;++i)
	{
		calCurrentData.push({
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
	};
					
   showCal(calCurrentData,5);
}
function CalData_error(xhr, textStatus, error) {
	alert("Error:1 "+textStatus+" "+error);
}
*/

	
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */	
function showCal(data2,d) {
	//alert("ShowCal "+data2[0].id);
	calCurrentData = data2;
	//console.log(data2);
		//document.getElementById("scheduler").innerHTML = '<p>working...</p>';
	
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
				//alert(e.event.start+" Add "+e.event.end);
				var x = [];
				x.push({"startD": e.event.start, "endD": e.event.end});
				myWinX("Win Title","content","I",x);
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
				//alert(e.event.start+" Edit "+e.event.end+"  "+e.event.id);
				//alert(e.event.id+" Edit " + e.event.start+" T:"+e.event.title+" F:"+e.event.franID+" X:"+e.event.taskId+" "+e.event.description);
				//myWinX("TITLE-HERE","xx","U",e.event.id,e.event.start,e.event.end);// send data to window
				//myWinX("TITLE-HERE","xx","U",e.event.id,e.event.start,e.event.end);
				getNewCalData("U",e.event.id);
				//alert(e.event.id+" Edit " + e.event.start+" T:"+e.event.title+" F:"+e.event.franID+" X:"+e.event.taskId+" "+e.event.description);
			},

			change: function(e) {
				e.preventDefault();
				//alert(e.event.start+" Change "+e.event.end+"  "+e.event.id);
				/*
				var idx = e.events[0].id;
				var start = e.startD;
				var end = e.endD;
				var desc = e.events[0].description;
				var t = e.events[0].title;
				//alert(desc+" Look: "+t);
				*/
				//e.events[0].title

				//alert(desc+" :: "+kendo.format("Selection between {0:g} and {1:g}", start, end) );
			},
			
			messages: {
				showWorkDay: "Show work hours"
			},

			//dataSource: data2,
			
			dataSource: {
				transport: {
					read: function(request) {
						//var newData = JSON.parse(JSON.stringify(data2));
						request.success(data2);
					}
				}
			},
			
			
			/*
			dataSource: {
				transport: {
					read: function(request) {
						var newData = JSON.parse(JSON.stringify(data));
						request.success(newData);
					}
				},
					
			// or 
			dataSource: [{
			  id: 1,
			  taskId: 2344,
			  title: "Interview",
			  start: new Date("2017-11-16 11:00 AM"),
			  end: new Date("2017-11-16 11:30 AM"),			  
			  startTimezone: null,
			  endTimezone: null,
			  description: "my description",
			  recurrenceId: null,
			  recurrenceRule: null,
			  recurrenceException: null,
			  ownerId: null,
			  isAllDay: false
			}],
			*/
			
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

function getNewCalData(mode,i) {
var cid = '0532';
alert("getNewCalData " + i);
var rtData = [];
	// EDIT
	 var data = {
      'loginName': 'joel',
	  'pwd':'none',
	  'franID':'none',
	  'cid':'0532'
    };
    data = $(this).serialize() + "&" + $.param(data);
	
	//var data = {};
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/calendarFull.php", 
		//data: { },  
		//data: data,
		data: {'cid':'0532', 'mode': mode, 'franID':'GD00KS', 'id':i },
		success: function (data) { 
			alert("getNewCalData "+data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						rtData.push(data[i]);
					};		
					alert(rtData.length+" Look: "+rtData[0].startD);					
					//return_fuction(rtData,0,data);
					//myWinX("Win Title","content","E",rtData)
				break;
				case 'ERROR':
					alert("No records found");
					//return_fuction(rtData,2,data);// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					alert("SECURITY ERROR");
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

function myWinX(winTitle,content,mode,calData) {

//alert("Date: "+ calData[0].startD);
var newMode;
var wTitle;
	alert(mode);
switch( mode ) {
	case 'U': // update
	newMode = 1;
	wTitle = "Edit";
	break;
	case 'D': // delete
	newMode = 2;
	wTitle = "Delete";
	break;
	case 'I': // insert

	//var calData = [];
	//calData.push({"startD": "2017-10-31 13:30", "endD": "2017-10-31 14:15"});
	//calData[0].startD = "2017-10-31 13:30";
	//calData[0].endD = "2017-10-31 14:15";
	newMode = 3;
	wTitle = "New";
	break;
	case 'E': // insert
	newMode = 1;
	wTitle = "Edit";
	break;
};


//var sd1 = new Date(sd);
//var ed1 = new Date(ed);
	//var sd1 = "2017-10-31 13:30";
	//var ed1 = "2017-10-31 14:15";
//alert(calData[0].startD+" idx2: " +calData[0].endD);
var str1 = "";
	// str1 += '
	// ';
	
	str1 += '<div id="to-window"> ';			
	str1 += '		<table> ';
	str1 += '		  <col span="1" class="wide"> ';
	str1 += '			<tr> ';
	str1 += '			  <td width="200px">Title: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="calTitle" id="calTitle" required="required" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">Start:</td> ';
	str1 += '			  <td><input id="calStartDate" style="width:220px;" value="'+calData[0].startD+'" /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">End:</td> ';
	str1 += '			  <td><input id="calEndDate" style="width:220px;" value="'+calData[0].endD+'"  /></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">All day event:</td> ';
	str1 += '			  <td><input type="checkbox" name="Accept" required validationMessage="Acceptance is required" /> I accept the terms of service</td> ';
	str1 += '			</tr> ';
				
	str1 += '<tr> ';
	str1 += '			  <td width="150px"><label for="calAllDayYN">All day event:</label></td> ';
	str1 += '				<td><select id="calAllDayYN" placeholder="Select option..." style="width:90px;" > ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px"><label for="calRepeatYN">Repeat:</label></td> ';
	str1 += '				<td><select id="calRepeatYN" placeholder="Select option..." style="width:90px;" > ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
				
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px">Description:</td> ';
	str1 += '			  <td><textarea rows="3" cols="120" class="k-textbox" style="width:300px;" name="calDesc" id="calDesc" required="required"> </textarea></td> ';
	str1 += '			</tr> ';
				
	str1 += '			<tr> ';
	str1 += '			  <td width="150px"><label for="calOwner">Owner:</label></td> ';
	str1 += '				<td><select id="calOwner" placeholder="Select option..." style="width:90px;" > ';
	str1 += '						<option>No</option> ';
	str1 += '						<option>Yes</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';				
	str1 += '		</table> ';	
	str1 += '		<button id="submit" class="k-button" onclick="saveMe('+calData[0].id+','+newMode+')">Save</button>  ';
	
	str1 += '		<button id="submit2" class="k-button" onclick="delMe('+calData[0].id+','+newMode+')">Delete</button>  ';
	
	str1 += '	</div> ';
	str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';

//"2017-10-20 13:30";
//var d1 = new Date(sd);
	//var e1 = new Date(ed);
	//var sd = d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDate()+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();
	//var ed = e1.getFullYear()+"-"+e1.getMonth()+"-"+e1.getDate()+" "+e1.getHours()+":"+e1.getMinutes()+":"+e1.getSeconds();
if ( mode == 'E') {
	// update and delete
	document.getElementById("dialogX").innerHTML = str1;
	document.getElementById("calDesc").value = calCurrentData[0].description;
	document.getElementById("calTitle").value = calCurrentData[0].title;	
	//document.getElementById("calStartDate").value;
	//document.getElementById("calEndDate").value;
	//document.getElementById("calAllDayYN").value;
	//document.getElementById("calRepeatYN").value;
	//document.getElementById("calDesc").value;
	//document.getElementById("calOwner").value;
	document.getElementById("calTitle").disabled = true;
	//document.getElementById("dialogX").innerHTML = str1;
	
	// document.getElementById("submit2").disabled = true;
	
	$("#calStartDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: new Date()
	});
	$("#calEndDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value:new Date()
	});
};	
if ( mode == 'U' || mode == 'D') {
	// update and delete
	document.getElementById("dialogX").innerHTML = str1;
	document.getElementById("calDesc").value = calCurrentData[0].description;
	document.getElementById("calTitle").value = calCurrentData[0].title;	
	//document.getElementById("calStartDate").value;
	//document.getElementById("calEndDate").value;
	//document.getElementById("calAllDayYN").value;
	//document.getElementById("calRepeatYN").value;
	//document.getElementById("calDesc").value;
	//document.getElementById("calOwner").value;
	document.getElementById("calTitle").disabled = true;
	document.getElementById("dialogX").innerHTML = str1;
	
	
	$("#calStartDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: new Date()
	});
	$("#calEndDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value:new Date()
	});
};
if ( mode == 'I' ) {
	// new
	var d1;// = new Date(sd);
	var e1;// = new Date(ed);
	//var sd = d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDate()+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();
	//var ed = e1.getFullYear()+"-"+e1.getMonth()+"-"+e1.getDate()+" "+e1.getHours()+":"+e1.getMinutes()+":"+e1.getSeconds();
	//alert(sd+" : "+ ed);
	document.getElementById("dialogX").innerHTML = str1;
	document.getElementById("calDesc").value = content;
	document.getElementById("calTitle").value = winTitle;	
	sd = document.getElementById("calStartDate").value;
	ed = document.getElementById("calEndDate").value;
	//document.getElementById("calAllDayYN").value;
	//document.getElementById("calRepeatYN").value;
	//document.getElementById("calDesc").value;
	//document.getElementById("calOwner").value;
	document.getElementById("calTitle").disabled = false;
	document.getElementById("submit2").disabled = true;
	
	$("#calStartDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: new Date()
	});
	$("#calEndDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value:new Date()
	});
};


	/*
	$("#calStartDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: new Date()
	});
	$("#calEndDate").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value:new Date()
	});
	*/
	
	$("#calAllDayYN").kendoComboBox({

	});
	$("#calRepeatYN").kendoComboBox({
	
	});
	$("#calOwner").kendoComboBox({
	
	});
	
    var myWindow = $("#dialogX"),
                        undo = $("#undo");
	myEditSchedualWin = myWindow;

		undo.click(function() {
			myWindow.data("kendoWindow").open();
			undo.fadeOut();
		});

		function onClose() {
			undo.fadeIn();
		}

		myWindow.kendoWindow({
			width: "530px",
			height: "350px",
			title: wTitle,
			visible: false,
			actions: [
				"Pin",
				"Minimize",
				"Maximize",
				"Close"
			],
			close: onClose
		}).data("kendoWindow").center().open();
	

	//alert(str1);

      
}
function saveMe(id,mode) {
	// get the data
	//alert(mode+" id "+id);
	var newMode;
	switch( mode ) {
		case 1: // update
		newMode = 'U';
		break;
		case 2: // delete
		newMode = 'D';
		break;
		case 3: // insert
		newMode = 'I';
		break;
	};
	
	var newTitle 		= document.getElementById("calTitle").value;	
	var newSd 			= document.getElementById("calStartDate").value;
	var newEd 			= document.getElementById("calEndDate").value;
	var newAllDay 		= document.getElementById("calAllDayYN").value;
	var newRepeat 		= document.getElementById("calRepeatYN").value;
	var newDescription 	= document.getElementById("calDesc").value;
	var newOwner 		= document.getElementById("calOwner").value;
	var newTaskId		= 'DESttt';
	var newId			= id;
	
	//var sd = "2017-10-20 13:30";
	//var ed = "2017-10-20 14:15";
	//alert(newDescription + " Look " + document.getElementById("calDesc").value );
	// mode G - select, I - insert, D - delete, U - update
		//alert("Start "+ newSd);
	var g = {'cid': cid, 'mode': newMode, 'franID': franID, 'id': newId, 'description': newDescription,'title': newTitle,'taskId': newTaskId,'startD': newSd, 'endD': newEd }
	//alert(newSd);
	//getCalData(showCal,g);
	//getNewCalData("G",0);
		
	myEditSchedualWin.data("kendoWindow").close();
	undo.fadeOut();	
}

function saveNewEntry() {

}

function updateEntry() {

}

function deleteEntry() {

}

function getAnEntry() {
// popup

}

// var g = {'cid':'0532', 'mode':'G', 'franID':'GD00KS', "id": 0 };
function getAllEntry(g) {
	//var cid = '0532';
	var rtData = [];
	// EDIT
	 var data = {
      'loginName': 'joel',
	  'pwd':'none',
	  'franID':'none',
	  'cid':'0532'
    };
    data = $(this).serialize() + "&" + $.param(data);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/calendarFull.php", 
		//data: { },  
		//data: data,
		data: g, //{'cid': cid, mode: "G", 'franID':'GD00KS', id:0 },
		success: function (data) { 
			//alert("getAllEntry: "+data.length);
			//alert("Status "+data[0].status);
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
					showCal(rtData,i);
				break;
				case 'ERROR':
					//alert("No records found");
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
	
function calRefresh() {
calCurrentData = [];// reset;
//var scheduler = $("#scheduler").data("kendoScheduler");
//scheduler.dataSource.read();

var rtData = [];
	// EDIT
	 var data = {
      'loginName': 'joel',
	  'pwd':'none',
	  'franID':'none',
	  'cid':'0532'
    };
    data = $(this).serialize() + "&" + $.param(data);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/calendarFull.php", 
		//data: { },  
		//data: data,
		data: {'cid': '0532', mode: "G", 'franID':'GD00KS', id:0 },
		success: function (data) { 
			//alert(data.length);
			//alert("Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						calCurrentData.push({
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
					};		
					//var scheduler = $("#scheduler").data("kendoScheduler");
					scheduler.dataSource.read();
				break;
				case 'ERROR':
					//alert("No records found");
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

function calAdd() {
	var scheduler = $("#scheduler").data("kendoScheduler");
	//var scheduler = $("#scheduler").data("kendoScheduler");
	calCurrentData.push({
		id: 199,
		taskId: 2344,
		title: "Interview",
		start: new Date("2017-11-26 11:00 AM"),
		end: new Date("2017-11-26 11:30 AM"),			  
		startTimezone: null,
		endTimezone: null,
		description: "my description",
		recurrenceId: null,
		recurrenceRule: null,
		recurrenceException: null,
		ownerId: null,
		isAllDay: false
	});
	scheduler.dataSource.read();
}

function calDel() {
	var scheduler = $("#scheduler").data("kendoScheduler");
	var x = calCurrentData;
	calCurrentData = [];
    calCurrentData = x.filter(function(el) {
		return el.id !== 1;
	});
	
	scheduler.dataSource.read();
}