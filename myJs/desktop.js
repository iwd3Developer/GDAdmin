//var dGrid1;
// https://www.w3schools.com/icons/icons_reference.asp

function updateMap(){
	// 500 N.W. Barry Rd Kansas City, MO 64155
	//var pos = {lat: 39.246475, lng: -94.58622};//"39.246475,-94.58622";
	// 3002 W 47TH ST, KANSAS CITY, KS, 66103
//	39.044083|-94.61802
	//mkMarkers();//OK
	
	for (i = 0; i < 2; i++) {
		var gps1=[];
		var st = job1Data[i].gpsLoc;
		gps1 = st.split("|");
		
		var locationToStringed = "("+gps1[0]+", "+gps1[0]+")";
		var input = locationToStringed.replace('(', '');
		var latlngStr = input.split(",", 2);
		var lat = parseFloat(latlngStr[0]);
		var lng = parseFloat(latlngStr[1]);
		var parsedPosition = new google.maps.LatLng(gps1[0], gps1[1]);
		
		LatLngLiteral = i;

		var pos = parsedPosition; 
		//var pos = {lat:38.9822282, lng:-94.6707917};
		//alert(parsedPosition+" "+job1Data[i].FirstName);//+" "+job1Data[i].LastName+" "+job1Data[i].addr1+);
		var lab = job1Data[i].FirstName+" "+job1Data[i].LastName;//job1Data[i].FirstName+" "+job1Data[i].LastName;
		var cont = "Job #"+job1Data[i].clientID+'</br>'+job1Data[i].addr1+'</br>'+job1Data[i].city+" "+job1Data[i].state+' '+job1Data[i].zipcode;

		addMk2(gps1[0],gps1[1],lab,cont);
	}
	
}
function initKendoCtrls() {
	/*
	function onOpen_mainMenu(e) {
		kendo//console.log("Opened: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
	}

	function onClose_mainMenu(e) {
		kendo//console.log("Closed: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
	}

	function onSelect_mainMenu(e) {
		kendo//console.log("Selected: " + $(e.item).children(".k-link").text());
	}

	function onActivate_mainMenu(e) {
		kendo//console.log("Activated: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
	}

	function onDeactivate_mainMenu(e) {
		kendo//console.log("Deactivated: " + ($(e.item).children(".k-link").text() || "ContextMenu"));
	}
	*/
	function onSelect_mainMenu(e) {
		//alert("Selected: " + $(e.item).children(".k-link").text());
		// #358
		switch($(e.item).children(".k-link").text()){
			case "Current Job Locations":
				updateMap();
			break;
			case " Alerts":
				showAlerts();
			break;
			case " Tasks":
				showTasks();
			break;
			case "Application Overview":
				help_win_title = "Application Overview HELP";
				a_window_help();
			break;
			case "Quick Calendar (Desktop)":
				//help_win_title = "HELP!";
				//media2_title = "XXX";
				//media2_url = "https://www.youtube.com/watch?v=tc3xhD24iTU";
				//b_window_help();
				//a_dialog_videoEnd();
			break;
			//addmin
			case " SP Items":
			// aTitle, aContent, aW, aH, aT, aL
				a_window_admin("Special Items","adm_spitems.html",850, 425,200, 350);
			break;
		};
	}
	$("#mainMenu").kendoMenu({
            scrollable: true,
            orientation: "vertical",
			 select: onSelect_mainMenu
			//open: onOpen,
			//close: onClose,
			//activate: onActivate,
			//deactivate: onDeactivate
    });
	// END MAIN MENU
	// FRAN MENU
	function onSelect_franMenu(e) {
		//alert("Selected: " + $(e.item).children(".k-link").text());
		switch($(e.item).children(".k-link").text()){
			case "x":
				//updateMap();
			break;
		};
	}
	$("#franMenu").kendoMenu({
            scrollable: true,
            orientation: "vertical",
			 select: onSelect_franMenu
			//open: onOpen,
			//close: onClose,
			//activate: onActivate,
			//deactivate: onDeactivate
    });
	// END FRAN MENU
	// SUBMENU A
	
	// END SUBMENU A
	// SUBMENU B
	
	// END SUBMENU B

		
	$("#tabstrip").kendoTabStrip({
		activate: onActivate,
		//show: onShow,
		//select: onSelect,
		animation:  {
			open: {
				effects: "fadeIn"
			}
		}
	});
	var tabStrip = $("#tabstrip").kendoTabStrip().data("kendoTabStrip");
	if ( cUserTrainingLevel == 1 ) {
		hideMenu1();
		tabStrip.disable(tabStrip.tabGroup.children().eq(1));
		tabStrip.disable(tabStrip.tabGroup.children().eq(2));
		tabStrip.disable(tabStrip.tabGroup.children().eq(3));
		tabStrip.disable(tabStrip.tabGroup.children().eq(4));
		tabStrip.disable(tabStrip.tabGroup.children().eq(5));
		//document.getElementById("mainMenu").innerHTML =
		//var eleman = document.getElementById("mainMenu");
		//eleman.setAttribute("disabled", true);
		//eleman.setAttribute("editable", true);		
	}
	//USER TRAINING
	////console.log("TRAINIG LEVEL "+cUserTrainingLevel);
	switch(cUserTrainingLevel) {
		case '0':
			// welcome video
			var a = "Welcome"
			var b = "./videos/GD6-Desktop.mp4";
			trainingVideo(a,b,0);
		break;
		case '1':
			// intro training video
			var a = "Intro Training Video";
			var b = "./videos/GD6-Desktop.mp4";
			trainingVideo(a,b,1);
		break;
		
		default:
		
		break;
		
	};
	
		
		
	/*
	// OK
	var tabStrip = $("#tabstrip").kendoTabStrip().data("kendoTabStrip");
    tabStrip.disable(tabStrip.tabGroup.children().eq(1));
	tabStrip.disable(tabStrip.tabGroup.children().eq(2));
	tabStrip.disable(tabStrip.tabGroup.children().eq(3));
	tabStrip.disable(tabStrip.tabGroup.children().eq(4));
	
	//var tab = tabStrip.select();
	//var tab = tabStrip.select(1);
	
	tabStrip.enable(tabStrip.tabGroup.children().eq(0), false);
    tabStrip.enable(tabStrip.tabGroup.children().eq(0), true);
	*/					
	
	$("#panelbar1").kendoPanelBar({
		expandMode: "single",
		contentUrls: [
			'./pages/page_1.html',
			'./pages/page_2.html',
			'./pages/a_pg2.html',
			'./pages/a_pg3.html'
		]
	});
	// END panelbar1
	
	
	
	// #calendar1
	desktopFooters("divCal_meta");
	var today = new Date(),
	events = [
	   +new Date(today.getFullYear(), today.getMonth(), 8),
	   +new Date(today.getFullYear(), today.getMonth(), 12),
	   +new Date(today.getFullYear(), today.getMonth(), 24),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 6),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 7),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 25),
	   +new Date(today.getFullYear(), today.getMonth() + 1, 27),
	   +new Date(today.getFullYear(), today.getMonth() - 1, 3),
	   +new Date(today.getFullYear(), today.getMonth() - 1, 5),
	   +new Date(today.getFullYear(), today.getMonth() - 2, 22),
	   +new Date(today.getFullYear(), today.getMonth() - 2, 27)
	];
	function onChange_calendar1(e) {
		//console.log("Change :: " + kendo.toString(this.value(), 'd'));
		desktopFooters("divCal_meta");
	}
	function onNavigate_calendar1(e) {
		//console.log("Navigate");
	}
	$("#calendar1").kendoCalendar({
		value: today,
		dates: events,
		weekNumber: true,
		//width:250, height:130,
		change: onChange_calendar1,
		navigate: onNavigate_calendar1,
		weekNumber: '<a class="italic">#= data.weekNumber #</a>',
		month: {
			// template for dates in month view
			content: '# if ($.inArray(+data.date, data.dates) != -1) { #' +
						'<div class="' +
						   '# if (data.value < 10) { #' +
							   "exhibition" +
						   '# } else if ( data.value < 20 ) { #' +
							   "party" +
						   '# } else { #' +
							   "cocktail" +
						   '# } #' +
						'">#= data.value #</div>' +
					 '# } else { #' +
					 '#= data.value #' +
					 '# } #',
			weekNumber: '<a class="italic">#= data.weekNumber #</a>'
		},
                dates: [
                  new Date("1/1/2018"),
                  new Date("1/19/2018"),
                  new Date("2/16/2018"),
                  new Date("4/16/2018"),
                  new Date("5/10/2018"),
                  new Date("5/25/2018"),
                  new Date("6/21/2018"),
                  new Date("7/3/2018"),
                  new Date("9/7/2018"),
                  new Date("10/12/2018"),
                  new Date("11/11/2018"),
                  new Date("11/26/2018"),
                  new Date("11/27/2018"),
                  new Date("12/25/2018")
                ],
                disableDates: function (date) {
                    var dates = $("#calendar1").data("kendoCalendar").options.dates;
                    if (date && compareDates(date, dates)) {
                        return true;
                    } else {
                        return false;
                    }
                }
		});
		
		function compareDates(date, dates) {
			for (var i = 0; i < dates.length; i++) {
				if (dates[i].getDate() == date.getDate() &&
					dates[i].getMonth() == date.getMonth() &&
					dates[i].getYear() == date.getYear()) {
				  return true
				}
			}
		}
	// END #calendar1
	
	// spliter
	$("#detail_pane").kendoSplitter({
		panes: [
			//{ collapsible: true },
			//{ collapsible: false },
			// default loader pages
			{ collapsible: false, contentUrl: "./pages/dt_detail1.html" },
			{ collapsible: false, contentUrl: "./pages/dt_detail2.html" }
			//{ collapsible: true}
		]
	});
	// end spliter

/*	
	// cal
	
	function scheduler_dataBinding(e) {
        //console.log("dataBinding");
    }

    function scheduler_dataBound(e) {
        //console.log("dataBound");
    }

    function scheduler_save(e) {
		e.preventDefault();
		//console.log("save ");
    }

    function scheduler_remove(e) {
        //console.log("remove");
    }

    function scheduler_cancel(e) {
        //console.log("cancel");
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
        }
		a_window_Cal1();
        //console.log(kendo.format(message, start, end));
    }

    function scheduler_edit(e) {
		e.preventDefault();
        //console.log("edit");
		//console.log(selectedSD+" edit Opend window use this data "+selectedED );
    }

    function scheduler_add(e) {
        //console.log(selectedSD+" add Opend window use this data "+selectedED );
    }

    function scheduler_moveStart(e) {
        //console.log("moveStart");
    }

    function scheduler_move(e) {
        //console.log("move");
    }

    function scheduler_moveEnd(e) {
        //console.log("moveEnd");
    }

    function scheduler_resizeStart(e) {
        //console.log("resizeStart");
    }

    function scheduler_resize(e) {
        //console.log("resize");
    }

    function scheduler_resizeEnd(e) {
        //console.log("resizeEnd");
    }

    function scheduler_navigate(e) {
        //console.log(kendo.format("navigate:: action:{0}; view:{1}; date:{2:d};", e.action, e.view, e.date));
    }

	//var dataSource = new kendo.data.SchedulerDataSource();
	//dataSource.add({id: 3,start: new Date("2018/8/8 10:15 AM"),end: new Date("2018/8/8 12:30 PM"),title: "Demo" });
	//dataSource.add({id: 2,start: new Date("2018/8/7 10:15 AM"),end: new Date("2018/8/7 12:30 PM"),title: "Demo" });

function scheduler_foo() {
	//var g = {'cid':'0532', 'mode':'X', 'franID':'GD00KS', 'id': 0 };//EDS
	//var observableData = new kendo.data.ObservableArray(calCurrentData);
	var str1 = "";
	alert(calCurrentData[0].start+" A "+calCurrentData2[0].start);
	//alert(calCurrentData[0].start);
	
	for (var i=0;i<calCurrentData.length;++i){
		str1 += '{ ';
		str1 += '  id: 1,';
		str1 += '  taskId: 2344,';
		str1 += '  title: "Interview-'+i+'",';
		str1 += '  start: new Date("2018-09-1'+i+' 11:00 AM"),';
		str1 += '  end: new Date("2018-09-16 1'+i+':30 AM"),';			  
		str1 += '  startTimezone: null,';
		str1 += '  endTimezone: null,';
		str1 += '  description: "my description",';
		str1 += '  recurrenceId: null,';
		str1 += '  recurrenceRule: null,';
		str1 += '  recurrenceException: null,';
		str1 += '  ownerId: null,';
		str1 += '  isAllDay: false';
		str1 += '}	';	
		//alert(str1);
		break;
	};
	
	
	$("#scheduler").kendoScheduler({
        date: new Date("2018/9/13"),
        startTime: new Date("2018/9/13 7:00"),
        height: 600,
        views: [
            "day",
            //{ type: "week", selected: true },
			{ type: "month", selected: true },
			"week",
            "month",
            "agenda",
            "timeline"
        ],
        selectable: true,
		editable: {
				add: true,
				update: true,
				destroy: false,
				edit: true
			  },
        //dataBinding: scheduler_dataBinding,
        //dataBound: scheduler_dataBound,
        save: scheduler_save,
        //remove: scheduler_remove,
        edit: scheduler_edit,
        add: scheduler_add,
        //cancel: scheduler_cancel,
        change: scheduler_change,
        //moveStart: scheduler_moveStart,
        //move: scheduler_move,
        //moveEnd: scheduler_moveEnd,
        //resizeStart: scheduler_resizeStart,
        //resize: scheduler_resize,
        //resizeEnd: scheduler_resizeEnd,
        //navigate: scheduler_navigate,
		// calCurrentData  observableData
		dataSource: [
			{
				id: 0,
				taskId: 0,
				title: "New Year",
				start: new Date("2018-01-01 12:01 AM"),
				end: new Date("2018-01-01 12:02 AM"),			  
				startTimezone: null,
				endTimezone: null,
				description: "my description",
				recurrenceId: null,
				recurrenceRule: null,
				recurrenceException: null,
				ownerId: null,
				isAllDay: false
			}		
			],
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
}
	//$("#scheduler").data("kendoScheduler").refresh();	
	//$('#scheduler').data('kendoScheduler').dataSource.read();
	$("#create").click(function() {	
		scheduler_foo();
	});
	
	
	//$("#create").click(function() {
	  //$("#scheduler").data("kendoScheduler").addEvent({
		//start: new Date("2018/9/13"),
		//end: new Date("2018/9/13")
	  //});
	//});
	
	$("#scheduler").on("dblclick", ".k-event", function(e){
          var scheduler = $("#scheduler").getKendoScheduler();
          var event = scheduler.occurrenceByUid($(this).data("uid"));
          if(scheduler.viewName() == "month"){
            scheduler.editEvent(event);
          }else{
            alert(event.title);
          }        
        });
		
	// end cal
	*/
	
	// divGridJobs	
	//alert("Look "+ getJobs1Data());
	// edit model and columns
	// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, franID
	$("#divGridJobs").kendoGrid({
		dataSource: divGridJobs_Source(),
			schema: {
				model: {
					fields: {
						idx: { type: "number" },
						clientID: { type: "string" },
						FirstName: { type: "string" },
						LastName: { type: "string" },
						fullName: { type: "string" },
						addr1: { type: "string" },
						fullAddr: { type: "string" },
						city: { type: "string" },
						state: { type: "string" },
						zipcode: { type: "string" },
						phone1: { type: "string" },
						phone2: { type: "string" },
						phone3: { type: "string" },
						moveDate: { type: "moveDate" },
						gpsLat: { type: "string"},
						gpsLog: { type: "string"}
						
					}
				}
			},
		
		pageSize: 20,
		height: 250,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: true,
		selectable: "row",
		columns: [
			{ field: "idx", title: "Job No", width: "90px" },
			{ field: "clientID", title: "Client ID", width: "110px" },
			//{ field: "FirstName", title: "FirstName", width: "0px" },
			//{ field: "LastName", title: "LastName",width: "0px" },
			{ field: "fullName", title: "Name",width: "100px" },
			//{ field: "addr1", title: "Address",width: "0px" },
			{ field: "fullAddr", title: "Address",width: "100px" },
			//{ field: "city", title: "City",width: "0px" },
			//{ field: "state", title: "State",width: "0px" },
			//{ field: "zipcode", title: "zipcode",width: "0px" },
			{ field: "phone1", title: "phone1",width: "110px" },
			{ field: "phone2", title: "phone2",width: "110px" },
			{ field: "phone3", title: "phone3",width: "110px" },
			{ field: "moveDate", title: "moveDate",width: "120px" },
			{ field: "gpsLat", title: "gpsLat",width: "60px" },
			{ field: "gpsLog", title: "gpsLog",width: "60px" }
		], change: onChange_divGridJobs
	});
	dGrid1 = $("#divGridJobs").data("kendoGrid");
	
	var dt = dateTime2('s');
	document.getElementById("divGrid1_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt+'</meta><span class="pull-right"><p>ready</p></span>';
	// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, fullName, fullAddr, franID
	
	function onChange_divGridJobs(e) {
		//alert("OK");
		// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
		//Selecting Grid
		//var gview = $("#grid").data("kendoGrid");
		//Getting selected item
		var selectedItem = dGrid1.dataItem(dGrid1.select());
		cJobNo = selectedItem.idx;
		//accessing selected rows data 
		//alert(cJobNo);
		showDetailsA(0);
	}
	function divGridJobs_Source() {	

		//var dataSource = new kendo.data.SchedulerDataSource();
		var dataSource = new kendo.data.DataSource();
		var i;
		for (i = 0; i < job1Data.length; i++) {
			// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, franID
			//dataSource.add({idx: job1Data[i].idx, clientID: job1Data[i].clientID, zipcode: job1Data[i].zipcode, phone1: job1Data[i].phone1 });
			var gps1=[];
			var st = job1Data[i].gpsLoc;
			gps1 = st.split("|");
			//alert(gps1[0]+" : "+gps1[1]);
			
			dataSource.add({idx: job1Data[i].idx,
				clientID: job1Data[i].clientID,			
				FirstName: job1Data[i].FirstName, 
				LastName: job1Data[i].LastName, 
				addr1: job1Data[i].addr1, 
				city: job1Data[i].city,
				state: job1Data[i].state,
				zipcode: job1Data[i].zipcode,
				phone1: formatPhoneNumber( job1Data[i].phone1 ),
				phone2: formatPhoneNumber( job1Data[i].phone2 ),
				phone3: formatPhoneNumber( job1Data[i].phone3 ),
				fullName: job1Data[i].FirstName+" "+job1Data[i].LastName,
				fullAddr: job1Data[i].addr1+" "+job1Data[i].city+" "+job1Data[i].state+" "+job1Data[i].zipcode,
				gpsLat: gps1[0],
				gpsLog: gps1[1]
			});
		};

		return dataSource;
	}
	// end grid 1
	
	// edit model and columns
	// STAFF / EMPLOYEES
	$("#divGrid2").kendoGrid({
		dataSource: dSource2(),
			schema: {
				model: {
					fields: {
						Name: { type: "string" },
						Phone: { type: "string" },
						Cell: { type: "string" }
					}
				}
			},
		
		pageSize: 20,
		height: 250,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: true,
		//pageable: {
			//input: true,
			//numeric: false
		//},
		columns: [
			{ field: "Name", title: "Name", width: "90px" },
			{ field: "Phone", title: "Phone", width: "120px" },
			{ field: "Cell", title: "Cell", width: "120px" }
		]
	});
	//dGrid2 = $("#divGrid2").data("kendoGrid");
	var dt2 = dateTime2('s');
	document.getElementById("divGrid2_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
	
	// end grid 2
	
	// Vehicle
	//idx, trucknumber, truckname, franID, edate
	$("#divGridVehicle").kendoGrid({
		dataSource: divGridVehicle_Source(),
			schema: {
				model: {
					fields: {
						idx: { type: "number" },
						trucknumber: { type: "string" },
						truckname: { type: "string" }
					}
				}
			},
		
		pageSize: 20,
		height: 135,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: true,
		selectable: "row",
		columns: [
			{ field: "idx", title: "##", width: "30px" },
			{ field: "trucknumber", title: "Truck No", width: "60px" },
			{ field: "truckname", title: "Name", width: "90px" }
		], change: onChange_divGridVehicle
	});
	vehicleGrid1 = $("#divGridVehicle").data("kendoGrid");
	
	var dt = dateTime2('s');
	document.getElementById("divGrid1_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt+'</meta><span class="pull-right"><p>ready</p></span>';
	
	// idx
	
	function onChange_divGridVehicle(e) {
		//alert("OK");
		// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
		//Selecting Grid
		//var gview = $("#grid").data("kendoGrid");
		//Getting selected item
		var selectedItem = vehicleGrid1.dataItem(vehicleGrid1.select());
		//accessing selected rows data 
		cTruckID = selectedItem.idx;
		cTruckNo = selectedItem.trucknumber;
		//alert(selectedItem.truckname);	
		
	}
	function divGridVehicle_Source() {	
		
		var dataSource = new kendo.data.DataSource();
		var i;
		for (i = 0; i < vehicleData.length; i++) {
			// idx
			dataSource.add({idx: vehicleData[i].idx,
				trucknumber: vehicleData[i].trucknumber,
				truckname: vehicleData[i].truckname
			});
		};

		return dataSource;
	}
	// end divGridVehicle grid
	
	// end Vehicle
	
	
	
		showHideMainMenu();
		showHideFranMenu();
		sideBarA();
		sideBarB();
		
		jobBoardInit();
		
		// JOB Calendar

		showHideTab();
	// END JOB Calendar
}
// END initKendoCtrls(


function sec_func() {

	document.getElementById("secAAA_hdr").innerHTML = "EDSIII (07:30 AM)";
	document.getElementById("secAAA_content").innerHTML = "<p> Welcome to my world AAA.</p>";
	
	document.getElementById("secBBB_hdr").innerHTML = "EDSIII";
	document.getElementById("secBBB_content").innerHTML = "<p> Welcome to my world BBB.</p>";
	
	document.getElementById("secCCC_hdr").innerHTML = "EDSIII";
	document.getElementById("secCCC_content").innerHTML = "<p> Welcome to my world CCC.</p>";
	
	document.getElementById("secDDD_hdr").innerHTML = "EDSIII";
	document.getElementById("secDDD_content").innerHTML = "<p> Welcome to my world DDD.</p>";
	
	document.getElementById("secEEE_hdr").innerHTML = "EDSIII";
	document.getElementById("secEEE_content").innerHTML = "<p> Welcome to my world EEE.</p>";
}

function upDate_notifications() {
	document.getElementById("notifications-messages").innerHTML = "9";
	document.getElementById("notifications-alerts").innerHTML = "8";
	document.getElementById("notifications-tasks").innerHTML = "7";
}

function showAlertBar(s,x){
	//alert("showAlerts()");
	// alert-info  alert-success  alert-warning  alert-danger
	var str1= "";
	switch(x) {
		case '1':
			str1 += '<div class="alert alert-info alert-dismissable">';
		break;
		case '2':
			str1 += '<div class="alert alert-success alert-dismissable">';
		break;
		case '3':
			str1 += '<div class="alert alert-warning alert-dismissable">';
		break;
		case '4':
			str1 += '<div class="alert alert-danger alert-dismissable">';
		break;
		default:
			str1 += '<div class="alert alert-info alert-dismissable">';
		break;
	};
	//str1 += '<div class="alert alert-info alert-dismissable">';
	str1 += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
	str1 += '<i class="fa fa-info-circle"></i>  <strong>'+s+'</strong>';
	str1 += '</div>';
	$("#myAlertBar").html(str1);
	window.setTimeout(function() {
		$(".alert").fadeTo(1000, 0).slideUp(500, function(){
			$(this).remove(); 
		});
	}, 4000);	
	
}

function showAlerts() {
	//alert("showAlerts()");
	// open window
	a_window_alerts();
}

/*
//ALERTS
// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts
// alerts update/query
	var alertsSend = [];
	alertsSend[0] = 'Hello World 3';
	alertsSend[1] = "PENDING";
	alertsSend[2] = 6;
	alertsSend[3] = 2;// idx
	alertsSend[4] = 'X';// I,U,D,X
	var aData = {franID:'GD00KS',cid:'0532',aDesc:alertsSend[0],aStatus:alertsSend[1],aLevel:alertsSend[2],idx:alertsSend[3],mode:alertsSend[4]};
	getAlerts(aData);
	// end alerts

// alerts insert/query
	// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts
	var alertsSend = [];
	alertsSend[0] = 'Hello World 11';//aDesc
	alertsSend[1] = "PENDING";//aStatus
	alertsSend[2] = 4;//aLevel
	alertsSend[3] = 2;// idx
	alertsSend[4] = 'I';//mode I,U,D,X
	alertsSend[5] = dateTime2("dt"); //"2018-08-09 09:20:05";//aDateTime
	alertsSend[6] = "SYSTEM";//aFrom
	
	var aData = {afranID:'GD00KS',cid:'0532',aDesc:alertsSend[0],aStatus:alertsSend[1],aLevel:alertsSend[2],idx:alertsSend[3],mode:alertsSend[4],aDateTime:alertsSend[5],aFrom:alertsSend[6]};
	getAlerts(aData);
	// end alerts
	
*/

function showTasks() {
	// open window
	a_window_tasks();
}

// SET KENDO DATASOURCE	
	// grid 1
	function dSource1() {
		
		//var dataSource= new kendo.data.SchedulerDataSource({
		  //data: [
			  //{id: 2,start: new Date("2018/8/6 10:15 AM"),end: new Date("2018/8/6 12:30 PM"),title: "Demo" }
		  //]
		//});
		
		
		//var i;
		//for (i = 0; i < 1; i++) {
			
		// OK
		//var dataSource = new kendo.data.SchedulerDataSource();
		//dataSource.add({id: 3,start: new Date("2018/8/8 10:15 AM"),end: new Date("2018/8/8 12:30 PM"),title: "Demo" });
		//dataSource.add({id: 3,start: new Date("2018/8/7 10:15 AM"),end: new Date("2018/8/7 12:30 PM"),title: "Demo" });
		//return dataSource;
		
		//alert(job1Data.length);
		//var dataSource = new kendo.data.SchedulerDataSource();
		var dataSource = new kendo.data.DataSource();
		var i;
		for (i = 0; i < job1Data.length; i++) {
			// idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, franID
			//dataSource.add({idx: job1Data[i].idx, clientID: job1Data[i].clientID, zipcode: job1Data[i].zipcode, phone1: job1Data[i].phone1 });
			var gps1=[];
			var st = job1Data[i].gpsLoc;
			gps1 = st.split("|");
			//alert(gps1[0]+" : "+gps1[1]);
			dataSource.add({idx: job1Data[i].idx,
				clientID: job1Data[i].clientID,			
				FirstName: job1Data[i].FirstName, 
				LastName: job1Data[i].LastName, 
				addr1: job1Data[i].addr1, 
				city: job1Data[i].city,
				state: job1Data[i].state,
				zipcode: job1Data[i].zipcode,
				phone1: formatPhoneNumber( job1Data[i].phone1 ),
				phone2: formatPhoneNumber( job1Data[i].phone2 ),
				phone3: formatPhoneNumber( job1Data[i].phone3 ),
				fullName: job1Data[i].FirstName+" "+job1Data[i].LastName,
				fullAddr: job1Data[i].addr1+" "+job1Data[i].city+" "+job1Data[i].state+" "+job1Data[i].zipcode,
				gpsLat: gps1[0],
				gpsLog: gps1[1]
			});
		};

		return dataSource;
		
		
	}
	
	
// END SET KENDO DATASOURCE	

// GET DATA SECTION

// ALERTS
function getAlerts() {
	// alerts insert/query
	// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts
	/*
	var alertsSend = [];
	alertsSend[0] = 'Hello World 11';//aDesc
	alertsSend[1] = "PENDING";//aStatus
	alertsSend[2] = 4;//aLevel
	alertsSend[3] = 2;// idx
	alertsSend[4] = 'I';//mode I,U,D,X
	alertsSend[5] = dateTime2("dt"); //"2018-08-09 09:20:05";//aDateTime
	alertsSend[6] = "SYSTEM";//aFrom
	
	var sendData = {afranID:'GD00KS',cid:'0532',aDesc:alertsSend[0],aStatus:alertsSend[1],aLevel:alertsSend[2],idx:alertsSend[3],mode:alertsSend[4],aDateTime:alertsSend[5],aFrom:alertsSend[6]};
	*/
	
	var dbParam, xmlhttp, myObj, x, txt = "";
	//var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", franID);//MUST!!
	data.append("cid", cid);//MUST!!
	data.append("mode", "x");//MUST!!
	data.append("userID", cUserID);//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			dtAlerts = myObj;
			/*
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";
				//alert(myObj[x].aFrom+' : '+myObj[x].aDesc);
				i2++;
			};
			*/
		};
	};

	//xmlhttp.open("GET", "./scripts/dt_alerts.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/dt_alerts.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		//console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		//console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  //console.log("The transfer is complete.");
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
		document.getElementById("notifications-alerts").innerHTML = dtAlerts.length;		
		//$("#divGrid1").data("kendoGrid").refresh();	
		//$('#divGrid2').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  //console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  //console.log("The transfer has been canceled by the user.");
	}

	/*
	//var d = 'Hello World';
	//var d2 = "PENDING";
	//var d3 = 6;
	//var d4 = 2;
	
	//var aData = {franID:'GD00KS',cid:'0532',aDesc:d,aStatus:d2,aLevel:d3,idx:d4,mode:'U'}
	//var aData = "";
	// idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel

	
	//dtAlerts = [];
	//var aData = {franID:'GD00KS',cid:'0532', mode:'X'};
	
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/dt_alerts.php", 
		//data: {franID:'GD00KS',cid:'0532', mode:'X'},
		data: aData,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						dtAlerts.push(data[i]);						
					};
					//set count 
					document.getElementById("notifications-alerts").innerHTML = dtAlerts.length;
				break;
				case 'ERROR':
					//alert("No Alerts records found");
					showAlertBar("No Alerts records found!",3);
					//set count 
					document.getElementById("notifications-alerts").innerHTML = 0;
				break;
				case 'SECURITY ERROR':
					alert("Alerts SECURITY ERROR");
					//set count 
					document.getElementById("notifications-alerts").innerHTML = 0;
					showAlertBar("SECURITY ERROR!",4);
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			showAlertBar("Alerts State Data Error:1 "+textStatus+" "+error,4);
		}
	});
	*/
	
}
// END Alerts

// TASKS
function getTasks(aData) {
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/dt_tasks.php", 
		//data: {franID:'GD00KS',cid:'0532', mode:'X'},
		data: aData,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						dtTasks.push(data[i]);						
					};
					//set count 
					document.getElementById("notifications-tasks").innerHTML = dtTasks.length;
				break;
				case 'ERROR':
					//alert("No Alerts records found");
					showAlertBar("No Alerts records found!",3);
					//set count 
					document.getElementById("notifications-tasks").innerHTML = 0;
				break;
				case 'SECURITY ERROR':
					alert("Alerts SECURITY ERROR");
					//set count 
					document.getElementById("notifications-tasks").innerHTML = 0;
					showAlertBar("SECURITY ERROR!",4);
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			showAlertBar("Tasks State Data Error:1 "+textStatus+" "+error,4);
		}
	});
}
// END TASKS

// STAFF / EMPLOYEES
// grid 2
function staffEmpRefresh() {
	getEmpData();
	//dGrid1 = $("#divGrid1").data("kendoGrid");		
	//$("#divGrid1").data("kendoGrid").refresh();	
	//$('#divGrid2').data('kendoGrid').dataSource.read();
}

function dSource2() {

	/*
	var dataSource= new kendo.data.SchedulerDataSource({
	  data: [
		  {id: 2,start: new Date("2018/8/6 10:15 AM"),end: new Date("2018/8/6 12:30 PM"),title: "Demo" }
	  ]
	});
	*/
	
	//var i;
	//for (i = 0; i < 1; i++) {
		/*
	// OK
	var dataSource = new kendo.data.SchedulerDataSource();
	dataSource.add({id: 3,start: new Date("2018/8/8 10:15 AM"),end: new Date("2018/8/8 12:30 PM"),title: "Demo" });
	dataSource.add({id: 3,start: new Date("2018/8/7 10:15 AM"),end: new Date("2018/8/7 12:30 PM"),title: "Demo" });
	return dataSource;
	*/
	
	var dataSource = new kendo.data.DataSource();
	var t = "";
	var t2 = "";
	var i;
	for (i = 0; i < allUserData.length; i++) {
		if ( allUserData[i].phone != "" ) {
			t = formatPhoneNumber( allUserData[i].phone );
		}else{
			t = "n/a";
		};
		if ( allUserData[i].cell != "" ) {
			t2 = formatPhoneNumber( allUserData[i].cell );
		}else{
			t2 = "n/a";
		};
		dataSource.add({Name: allUserData[i].firstName+" "+allUserData[i].lastName, Phone: t, Cell: t2});
	};
	return dataSource;
}

function getEmpData() {
	// dSource2()		
	var dbParam, xmlhttp, myObj, x, txt = "";
	var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", "GD00KS");//MUST!!
	data.append("cid", "0532");//MUST!!
	data.append("mode", "x");//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			allUserData = myObj;
			/*
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";

				job1Data.push({idx: myObj[x].idx, 
					clientID: myObj[x].clientID, 
					FirstName: myObj[x].FirstName,
					LastName: myObj[x].LastName,
					addr1: myObj[x].addr1,
					city: myObj[x].city,
					state: myObj[x].state,
					zipcode: myObj[x].zipcode,
					phone1: myObj[x].phone1,
					phone2: myObj[x].phone2,
					phone3: myObj[x].phone3,
					fullName: myObj[x].fullName,
					fullAddr: myObj[x].fullAddr
				});
				i2++;
			};
			*/
		};
	};

	//xmlhttp.open("GET", "./scripts/dt_employees.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/dt_employees.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		//console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		//console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  //console.log("The transfer is complete.");
	  allUserData = myObj;
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
		//dGrid1 = $("#divGrid1").data("kendoGrid");		
		//$("#divGrid1").data("kendoGrid").refresh();	
		//$('#divGrid2').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  //console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  //console.log("The transfer has been canceled by the user.");
	}

	/*
	// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
	//Selecting Grid
	var gview = $("#grid").data("kendoGrid");
	//Getting selected item
	var selectedItem = gview.dataItem(gview.select());
	//accessing selected rows data 
	alert(selectedItem.email);
	*/
}
// END STAFF / EMPLOYEES


// JOBS1
function getJobs1Data() {
	// dSource1()	
	
	var dbParam, xmlhttp, myObj, x, txt = "";
	var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", "GD00KS");//MUST!!
	data.append("cid", "0532");//MUST!!
	data.append("mode", "x");//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			job1Data = myObj;
			/*
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";

				job1Data.push({idx: myObj[x].idx, 
					clientID: myObj[x].clientID, 
					FirstName: myObj[x].FirstName,
					LastName: myObj[x].LastName,
					addr1: myObj[x].addr1,
					city: myObj[x].city,
					state: myObj[x].state,
					zipcode: myObj[x].zipcode,
					phone1: myObj[x].phone1,
					phone2: myObj[x].phone2,
					phone3: myObj[x].phone3,
					fullName: myObj[x].fullName,
					fullAddr: myObj[x].fullAddr
				});
				i2++;
			};
			*/
		};
	};

	//xmlhttp.open("GET", "./scripts/dt_jobs1.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/dt_jobs1.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		//console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		//console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  //console.log("The transfer is complete getJobs1Data.");
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
	  //var dataSource = new kendo.data.DataSource();

		//dGrid1 = $("#divGridJobs").data("kendoGrid");		
		//$("#divGridJobs").data("kendoGrid").refresh();	
		//$('#divGridJobs').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  //console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  //console.log("The transfer has been canceled by the user.");
	}


	
	/*
	// https://www.codeproject.com/Articles/606682/Kendo-Grid-In-Action
	//Selecting Grid
var gview = $("#grid").data("kendoGrid");
//Getting selected item
var selectedItem = gview.dataItem(gview.select());
//accessing selected rows data 
alert(selectedItem.email);
	*/
}
// END JOBS1 


function desktopFooters(q){
	
	switch(q) {
		case "divCal_meta":
			//desktopFooters("divCal_meta");
			var dt2 = dateTime2('s');
			document.getElementById("divCal_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "divVehicle_meta":
			//desktopFooters("divVehicle_meta");
			var dt2 = dateTime2('s');
			document.getElementById("divVehicle_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "divMap_meta":
			//desktopFooters("divMap_meta");
			var dt2 = dateTime2('s');
			document.getElementById("divMap_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		
		// JOB BOARD
		case "jbJobs_meta":
			//desktopFooters("jbJobs_meta");
			var dt2 = dateTime2('s');
			document.getElementById("jbJobs_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "jbCrews_meta":
			//desktopFooters("jbCrews_meta");
			var dt2 = dateTime2('s');
			document.getElementById("jbCrews_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "jbDetails_meta":
			//desktopFooters("jbDetails_meta");
			var dt2 = dateTime2('s');
			document.getElementById("jbDetails_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "jbLegMap_meta":
			//desktopFooters("jbLegMap_meta");
			var dt2 = dateTime2('s');
			document.getElementById("jbLegMap_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
		case "jbSPItems_meta":
			//desktopFooters("jbSPItems_meta");
			var dt2 = dateTime2('s');
			document.getElementById("jbSPItems_meta").innerHTML = '<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><meta itemprop="datePublished" content="01-01-2016"> '+dt2+'</meta><span class="pull-right"><p>ready</p></span>';
		break;
	};
	
}

function getAllEntry(g) {
	var dbParam, xmlhttp, myObj, x, txt = "";
	var i2 = 1;
	var data = new FormData();
	//EDIT AS NEEDED IT
	data.append("franID", "GD00KS");//MUST!!
	data.append("cid", "0532");//MUST!!
	data.append("mode", "x");//MUST!!
	//data.append("limit", 40);

	xmlhttp = new XMLHttpRequest();
	xmlhttp.synchronous = false;
	//EVENTS
	xmlhttp.addEventListener("progress", updateProgress);
	xmlhttp.addEventListener("load", transferComplete);
	xmlhttp.addEventListener("error", transferFailed);
	xmlhttp.addEventListener("abort", transferCanceled);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
			calCurrentData2 = new kendo.data.SchedulerDataSource();
			//calCurrentData = new kendo.data.SchedulerDataSource();
			//calCurrentData3 = new kendo.data.ObservableArray(this.responseText);
			//calCurrentData2 = myObj;
			//calCurrentData = myObj;
			//calCurrentData2.add({id: 3,start: new Date("2018/9/8 10:15 AM"),end: new Date("2018/9/8 11:30 PM"),title: "Demo" });
			//calCurrentData2.add({id: 4,start: new Date("2018/9/9 11:15 AM"),end: new Date("2018/9/9 12:30 PM"),title: "Demo" });

			//alert(myObj[0].title+" : "+calCurrentData2[0].title);
			
			for (x in myObj) {
				//txt += i2+" - "+myObj[x].name + "<br>";
				// OK
				//calCurrentData2.add({id: myObj[x].id,start: new Date(myObj[x].startD),end: new Date(myObj[x].endD),title: myObj[x].title });
				calCurrentData2.add({id: myObj[x].id, 
					taskId: myObj[x].taskId, 
					title: myObj[x].title,
					start: new Date(myObj[x].startD),
					end: new Date(myObj[x].endD),
					startTimezone: myObj[x].startTimezone,
					description: myObj[x].description,
					recurrenceId: myObj[x].recurrenceId,
					recurrenceRule: myObj[x].recurrenceRule,
					recurrenceException: myObj[x].recurrenceException,
					ownerId: myObj[x].ownerId,
					isAllDay: myObj[x].isAllDay
				});
				i2++;
			};
		};
	};

	//xmlhttp.open("GET", "./scripts/calendarFull.php" + dbParam, true);
	//xmlhttp.send();

	xmlhttp.open("POST", "./scripts/calendarFull.php");//, false);//false-synchronous, true-asynchronously
	xmlhttp.send(data);
	
	// progress on transfers from the server to the client (downloads)
	function updateProgress (oEvent) {
	  if (oEvent.lengthComputable) {
		var percentComplete = oEvent.loaded / oEvent.total * 100;
		//console.log(percentComplete);
		//document.getElementById("msg1").innerHTML = " "+percentComplete;
	  } else {
		//console.log("Unable to compute progress information since the total size is unknown");
	  }
	}

	function transferComplete(evt) {
	  //console.log("The transfer is complete CALENDAR.");
	  //calCurrentData = myObj;
	  //alert(calCurrentData);
	  //alert(calCurrentData.length);
	  //document.getElementById("msg1").innerHTML = "loading complete. ";
	  //var dataSource = new kendo.data.DataSource();
		showMyCal(calCurrentData2);
		//dGrid1 = $("#divGridJobs").data("kendoGrid");		
		//$("#divGridJobs").data("kendoGrid").refresh();	
		//$('#divGridJobs').data('kendoGrid').dataSource.read();
		//setTimeout(localCleanUp(),10000);
	}

	function transferFailed(evt) {
	  //console.log("An error occurred while transferring the file.");
	}

	function transferCanceled(evt) {
	  //console.log("The transfer has been canceled by the user.");
	}

}

// END GET DATA SECTION
function trainingVideo(a,b,c) {
	////console.log("....trainingVideo...");
	if ( c == 1 ) {
		tabStrip = $("#tabstrip").kendoTabStrip().data("kendoTabStrip");
		tabStrip.disable(tabStrip.tabGroup.children().eq(1));
		tabStrip.disable(tabStrip.tabGroup.children().eq(2));
		tabStrip.disable(tabStrip.tabGroup.children().eq(3));
		tabStrip.disable(tabStrip.tabGroup.children().eq(4));
		tabStrip.disable(tabStrip.tabGroup.children().eq(5));
		// hide menubar
		hideMenu1();
		document.getElementById('xMenu').style.display = 'none';
		showHideMainMenu();
		showHideFranMenu();
		//sideBarA();
		//sideBarB();
		//showHideTab();
		
	};
	
$("#mediaplayer0").kendoMediaPlayer({
		autoPlay: false,
		navigatable: true,
		
		play: onPlay2,
		pause: onPause2,
		end: onEnd2,
		ready: onReady2,
		timeChange: onTimeChange2,
		volumeChange: onVolumeChange2,
		/*
		media: {
			title: "Recap of Progress Ringing The Bell at Nasdaq (2016)",
			source: "https://www.youtube.com/watch?v=tc3xhD24iTU"
		}
		*/
		media: {
			title: a,
			source: b
		}

	});
	function onPlay2() {
		//console.log("event :: play");
	}

	function onPause2() {
		//console.log("event :: pause");
		a_dialog_videoEnd();
	}

	function onEnd2() {
		//console.log("event :: end");
		switch(c) {
			case 1:
				//alert("The system administrator will be notified you have completed this training and your access will be changed, Thank You.");
				a_dialog_videoEnd("The system administrator will be notified you have completed this training and your access will be changed, Thank You.");
				location.reload();
			break;
			default:
				// show alert video done
				a_dialog_videoEnd("Your Training Video Has Completed, Thank You.");
			break;
		};
		
	}

	function onReady2() {
		//console.log("event :: ready");
	}

	function onTimeChange2() {
		//console.log("event :: timeChange");
	}

	function onVolumeChange2() {
		//console.log("event :: volumeChange");
	}	
}

function dateTime2(a) {
var rtData;
var d = new Date();
	var n = d.getTime();
	// document.getElementById("demo").innerHTML = d.getTime();
    var curr_date = d.getDate();
	if (curr_date < 10){
		curr_date = "0"+curr_date;
	};
    var curr_month = d.getMonth() + 1; //Months are zero based
	if (curr_month < 10){
		curr_month = "0"+curr_month;
	};
    var curr_year = d.getFullYear();
	
	if (curr_hour >= 13){
		curr_hour = curr_hour - 12;
	};
	
	var curr_hour = d.getHours();
	if (curr_hour < 10){
		curr_hour = "0"+curr_hour;
	};
	if (curr_hour > 12){
		curr_hour = (curr_hour -12) ;
	};
		
	var curr_minutes = d.getMinutes();
	if (curr_minutes < 10){
		curr_minutes = "0"+curr_minutes;
	};
	var curr_seconds = d.getSeconds();
	if (curr_seconds < 10){
		curr_seconds = "0"+curr_seconds;
	};
	
	
    var dateF = curr_date + "-" + curr_month + "-" + curr_year;
	var timeF = curr_hour +":"+ curr_minutes +":"+ curr_seconds;
	
	if ( a == 'd') {
		rtData = dateF;
	};
	if ( a == 't') {
		rtData = timeF;
	};
	if ( a == 's') {
		rtData = "   "+dateF+" @ "+timeF;
	};
	if ( a == 'dt') {
		rtData = curr_year+"-"+curr_month+"-"+curr_date+" "+timeF;
		//alert(rtData);
	};
	//alert(timeF+" bb started "+dateF);
	return rtData
}