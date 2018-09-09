
desktopFooters("jbJobs_meta");
desktopFooters("jbCrews_meta");
desktopFooters("jbDetails_meta");
desktopFooters("jbLegMap_meta");
desktopFooters("jbSPItems_meta");

// job board init
function jobBoardInit() {
	
	$("#jobBoardGrid").kendoGrid({
		dataSource: {
			data: products,
			schema: {
				model: {
					fields: {
						ProductName: { type: "string" },
						UnitPrice: { type: "number" },
						UnitsInStock: { type: "number" },
						Discontinued: { type: "boolean" }
					}
				}
			},
			pageSize: 20
		},
		height: 200,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "130px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "130px" },
			{ field: "Discontinued", width: "130px" }
		]
	});
	// end
	
	// jobCrews stateData
	$("#jobCrews").kendoGrid({
		dataSource: {
			data: products,
			schema: {
				model: {
					fields: {
						ProductName: { type: "string" },
						UnitPrice: { type: "number" },
						UnitsInStock: { type: "number" }
						//Discontinued: { type: "boolean" }
					}
				}
			},
			pageSize: 20
		},
		height: 325,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "100px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "100px" }
			//{ field: "Discontinued", width: "130px" }
		]
	});
	
	// job legs
	// jobLegs stateData
	$("#jobLegs").kendoGrid({
		dataSource: {
			data: products,
			schema: {
				model: {
					fields: {
						ProductName: { type: "string" },
						UnitPrice: { type: "number" },
						UnitsInStock: { type: "number" }
						//Discontinued: { type: "boolean" }
					}
				}
			},
			pageSize: 20
		},
		height: 200,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "100px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "100px" }
			//{ field: "Discontinued", width: "130px" }
		]
	});
	
	// jobSpItems stateData
	$("#jobSpItems").kendoGrid({
		dataSource: {
			data: products,
			schema: {
				model: {
					fields: {
						ProductName: { type: "string" },
						UnitPrice: { type: "number" },
						UnitsInStock: { type: "number" }
						//Discontinued: { type: "boolean" }
					}
				}
			},
			pageSize: 20
		},
		height: 200,
		scrollable: true,
		sortable: true,
		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			"ProductName",
			{ field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "100px" },
			{ field: "UnitsInStock", title: "Units In Stock", width: "100px" }
			//{ field: "Discontinued", width: "130px" }
		]
	});
}

//  job board data

function getStates1() {
	$.ajax({ 
    type: 'GET', 
	//type: 'POST',
    url: "./scripts/states.php", 
		//data: {franID:'GD00KS',cid:'0532', mode:'X'},
		//data: aData,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						stateData.push(data[i]);						
					};
					//set count 
					//document.getElementById("notifications-tasks").innerHTML = stateData.length;
				break;
				case 'ERROR':
					//alert("No Alerts records found");
					showAlertBar("No Alerts records found!",3);
					//set count 
					//document.getElementById("notifications-tasks").innerHTML = 0;
				break;
				case 'SECURITY ERROR':
					alert("Alerts SECURITY ERROR");
					//set count 
					//document.getElementById("notifications-tasks").innerHTML = 0;
					showAlertBar("SECURITY ERROR!",4);
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			showAlertBar("States Data Error:1 "+textStatus+" "+error,4);
		}
	});
}


// job board logic

