//myVehicle.js
/*
Add to main.html : 
	var currentVehicleData = [];
Call on load complete:
	getAllVehicle('GD00KS','0532');
	--> vehicleUpdate(dataObj,i,mode )
	--> vehicleReturn(data,b)

list onClick:
		getVehicleSelected
		--> vehicleDialogShow(x,'U')
		on save --> javascript:doVehicle(x,1)
		on Delete --> javascript:doVehicle(x,3)
Admin new vehicle onClick --> vehicleNewDialogShow
save onClick --> javascript:doVehicle(0,2)

doVehicle:
case 1:
// update
upDateVehicle(x,franID, '0532');
break;
case 2:
// insert
newVehicle();
break;
case 3:
// delete
deleteVehicle(x,franID, '0532');
break;
		
*/

function deleteVehicle(x,a,b) {
// get all
//alert("X "+ currentVehicleData[x].idx);	
	var mode = 'D';
	//var i = x;
	var dataObj = {
		'idx':currentVehicleData[x].idx,      
		'trucknumber': '.',
		'truckname': '.',
		'truckmodel': '.',
		'description': '.',
		'milage': 0,
		'status': '.',
		'lastMaintanceCheck': '.',
	  
		'mode':mode,
		'cid':'0532',
		'franID':'GD00KS'
	};
	vehicleUpdate(dataObj,x,mode );
}
function newVehicle(x) {
// get all	
	var mode = 'I';
	//var i = 1;
	var dataObj = {
		'idx':0,      
		'trucknumber': document.getElementById("trucknumber").value,
		'truckname': document.getElementById("truckname").value,
		'truckmodel': document.getElementById("truckmodel").value,
		'description': document.getElementById("description").value,
		'milage': document.getElementById("milage").value,
		'status': document.getElementById("vStatus").value,
		'lastMaintanceCheck': document.getElementById("lastMaintanceCheck").value,
	  
		'mode':mode,
		'cid':'0532',
		'franID':'GD00KS'
	};
	vehicleUpdate(dataObj,x,mode );
}
function upDateVehicle(x,a,b) {
// get all	
//alert("X "+document.getElementById("truckmodel").value +"..");
	var mode = 'U';
	var i = 1;
	var dataObj = {
		'idx':currentVehicleData[x].idx,      
		'trucknumber': document.getElementById("trucknumber").value,
		'truckname': document.getElementById("truckname").value,
		'truckmodel': document.getElementById("truckmodel").value,
		'description': document.getElementById("description").value,
		'milage': document.getElementById("milage").value,
		'status': document.getElementById("vStatus").value,
		'lastMaintanceCheck': document.getElementById("lastMaintanceCheck").value,
	  
		'mode':mode,
		'cid':'0532',
		'franID':'GD00KS'
	};
	vehicleUpdate(dataObj,i,mode );
}
function getAllVehicle() {
	document.getElementById("theVehicle").innerHTML = "<div class='list-group'>loading....</div>";
	// idx, trucknumber, truckname, franID, edate
	
	var str1 = "";
	/*
	str1 += '<table class="table table-hover" width="100%"> ';
	str1 += '<tr> ';
	str1 += '<th width="100">ID</th> ';
	str1 += '<th>Name</th> ';
	str1 += '<th width="100">Date</th> ';
	str1 += '<th>Status</th> ';
	str1 += '<th>Notes</th> ';
	str1 += '</tr> ';
	*/
	
	// list group
	str1 += '<div class="list-group">';

	vehicleData = [];
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/vehicle.php", 
		data: {franID:'GD00KS',cid:0532},
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						/*
						vehicleData.push({
							'idx':data[i].idx,
							'trucknumber': data[i].trucknumber,
							'truckname':data[i].truckname,

							'status': 'OK',
						});
						*/
						vehicleData.push(data[i]);
						// add to table
						str1 += '<a href="#" class="list-group-item">';
							str1 += '<h4 class="list-group-item-heading">'+i+' Name: '+data[i].truckname+'<br/></h4>';
							
							str1 += '<table class="table table-hover" width="100%"> ';
							
								str1 += '<tr> ';
								str1 += '<th width="100">ID</th> ';
								str1 += '<th>Name</th> ';
								str1 += '<th width="100">Service Date</th> ';
								str1 += '<th>Status</th> ';
								str1 += '<th>Notes</th> ';
								str1 += '</tr> ';
							
								str1 += '<tr> ';
									str1 += '<td>'+data[i].trucknumber+'</td> ';
									str1 += '<td>'+data[i].truckname+'</td> ';
									str1 += '<td>11-7-2017</td> ';
									str1 += '<td><span class="label label-success">Approved</span></td> ';
									str1 += '<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td> ';
								str1 += '</tr>';
							str1 += '</table> ';
							
							//str1 += '<p class="list-group-item-text">Time Total: '+data[i].timeTotal+'</p>';
													
							str1 += '<button type="button" onclick="javascript:getVehicleSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-edit"></span> Edit  ';
							str1 += '</button> ';
							
							str1 += '<button type="button" onclick="javascript:getVehicleSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-trash"></span> Delete  ';
							str1 += '</button> ';
							
							str1 += '<button type="button" onclick="javascript:getVehicleSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-plus-sign"></span> New ';
							str1 += '</button> ';
							
							str1 += '<button type="button" onclick="javascript:getVehicleSelected('+i+');" class="btn btn-default btn-sm"> ';
							str1 += '  <span class="glyphicon glyphicon-question-sign"></span> Help ';
							str1 += '</button> ';
												
						str1 += '</a>';
					};
					
					//str1 += '</table> ';
					str1 += '</div>';
					
					document.getElementById("theVehicle").innerHTML = str1;
				break;
				case 'ERROR':
					alert("No records found");
					vehicleData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR',
					});
					//return stateData;// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					alert("SECURITY ERROR");
					vehicleData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR'
					});
					//return vehicleData;// 0=ok,1-security,2=no records
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			alert(" State Data Error:1 "+textStatus+" "+error);
		}
	});
	
/*
// get all	
	var mode = 'X';
	var i = 1;
	var dataObj = {
		'idx':0,      
		'trucknumber': '.',
		'truckname': '.',
		'truckmodel': '.',
		'description': '.',
		'milage': 0,
		'status': '.',
		'lastMaintanceCheck': '.',
	  
		'mode':'X',
		'cid':'0532',
		'franID':'GD00KS'
	};
	vehicleUpdate(dataObj,i,mode );
*/
}

function getVehicleSelected(id) {
	
}

   function vehicleReturn(data,b) {
		var t = new Date();
		var status = b;
		currentVehicleData = data;
		var str1="";
		document.getElementById("vehicle1").innerHTML = "<div class='list-group'>loading....</div>";
		
		str1 += '<div class="list-group">';
		for (var i=0;i<data.length;++i)
		{
			//str1 += '<div class="list-group">';
				//str1 += '<a href="#" class="list-group-item active">';
				str1 += '<a href="javascript:getVehicleSelected('+i+');" class="list-group-item">';
					str1 += '<h4 class="list-group-item-heading">'+i+' Truck No : '+data[i].trucknumber+' : <font size="1">'+data[i].lastMaintanceCheck+'</font><br/></h4>';
					str1 += '<p class="list-group-item-text">Truck Name : '+data[i].truckname+' Model: '+data[i].truckmodel+'<br/>';
					str1 += 'Description: '+data[i].truckname+' <br/> Status: '+data[i].vStatus;
				str1 += '</p>';
				str1 += '</a>';
			//str1 += '</div>';
		};
		str1 += '</div>';


		document.getElementById("vehicle1").innerHTML = str1;
		document.getElementById("vehicle1_footer").innerHTML = "<p>"+dateTime1("s")+"</p>";
   }
  

function vehicleUpdate(dataObj,i,mode) {
	var rtData = [];
    //dataOut = $(this).serialize() + "&" + $.param(dataObj);
	$.ajax({ 
    //type: 'GET', 
	type: 'POST',
    url: "./scripts/crud-vehicle-IU.php", 
		data: dataObj,
		success: function (data) { 
			//alert(data.length);
			//alert("Call Status "+data[0].status);
			switch (data[0].status) {
				case 'OK':
					// create array return data
					for (var i=0;i<data.length;++i)
					{
						rtData.push({
							'idx':data[i].idx,
							'trucknumber': data[i].trucknumber,
							'truckname':data[i].truckname,
							'truckmodel':data[i].truckmodel,
							'description':data[i].description,
							'milage':data[i].milage,
							'vStatus':data[i].vStatus,
							'lastMaintanceCheck':data[i].lastMaintanceCheck,
							'status': 'OK',
						});
					};
					//return rtData;
					vehicleReturn(rtData,'OK');
					//currentVehicleData = rtData;
				break;
				case 'ERROR':
					//alert("No records found");
					rtData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR',
					});
					return rtData;// 0=ok,1-security,2=no records
				break;
				case 'SECURITY ERROR':
					rtData.push({
						'idx':0,
						'trucknumber':'0',
						'truckname':'0',
						'truckcolor':'0',
						'status': 'ERROR'
					});
					return rtData;// 0=ok,1-security,2=no records
				break;
				default:
					//alert("XXXXX");
				break;
			};			
		},
		error: function(xhr, textStatus, error) {
			alert(" Crud-vehicle-IU Error:1 "+textStatus+" "+error);
		}
	});
}
  
function getVehicleSelected(x) {
	//get selected data send to dialog
	//var outData = "";
	//alert(currentVehicleData[x].description);
	vehicleDialogShow(x,'U');
}
// vehicleDialog
function vehicleDialogShow(x) {
	// currentVehicleData
	var str1 = "";
	str1 += '<div id="to-window"> ';
	str1 += '		<table> ';
	str1 += '		  <col span="1" class="wide"> ';
	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Name: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="truckname" id="truckname" value="'+currentVehicleData[x].truckname+'" required="required" /></td> ';
	str1 += '			</tr> ';

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Number: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="trucknumber" id="trucknumber" value="'+currentVehicleData[x].trucknumber+'" required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Model: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="truckmodel" id="truckmodel" value="'+currentVehicleData[x].truckmodel+'" required="required" /></td> ';
	str1 += '			</tr> ';	


	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Description: </td> ';
	str1 += '			  <td><textarea rows="3" cols="120" class="k-textbox" style="width:300px;" name="description" id="description" required="required"> '+currentVehicleData[x].description+'</textarea></td> ';
	str1 += '			</tr> ';

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Milage: </td> ';
	str1 += '			  <td><input type="number" class="k-textbox" style="width:300px;" name="milage" id="milage" value="'+currentVehicleData[x].milage+'" required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Maintance Check: </td> ';
	str1 += '			  <td><input type="date" class="k-textbox"  name="lastMaintanceCheck" id="lastMaintanceCheck" style="width:300px;"  required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Status:</td> ';
	str1 += '				<td><select id="vStatus" placeholder="Select option..." style="width:200px;" value="'+currentVehicleData[x].vStatus+'" > ';
	str1 += '						<option>On Line</option> ';
	str1 += '						<option>Off Line</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
	

	
				
	str1 += '		</table><br/>';	
	str1 += '		<button id="submit" class="k-button" onClick="javascript:doVehicle('+x+',1);">Save</button>  ';	
	str1 += '		<button id="submit2" class="k-button" onClick="javascript:doVehicle('+x+',3);" >Delete</button>  ';	
	str1 += '	</div> ';
	str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';

	document.getElementById("vehicleDialog").innerHTML = str1;
	
	// set kendo controls here
	$("#lastMaintanceCheck").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm",
		value: currentVehicleData[x].lastMaintanceCheck
	});
	$("#vStatus").kendoComboBox({

	});
	var myWindow = $("#vehicleDialog"),
                        undo = $("#undo");
	//myEditSchedualWin = myWindow;

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
			title: "Vehicle Maintiance Screen",
			visible: true,
			actions: [
				//"Pin",
				//"Minimize",
				//"Maximize",
				"Close"
			],
			close: onClose
		}).data("kendoWindow").center().open();
	
}

// show new
function vehicleNewDialogShow() {
	//alert("vehicleNewDialogShow()");
	// currentVehicleData
	var str1 = "";
	str1 += '<div id="to-window"> ';
	str1 += '		<table> ';
	str1 += '		  <col span="1" class="wide"> ';
	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Name: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="truckname" id="truckname" value="" required="required" /></td> ';
	str1 += '			</tr> ';

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Number: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="trucknumber" id="trucknumber" value="" required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Model: </td> ';
	str1 += '			  <td><input type="text" class="k-textbox" style="width:300px;" name="truckmodel" id="truckmodel" value="" required="required" /></td> ';
	str1 += '			</tr> ';	


	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Description: </td> ';
	str1 += '			  <td><textarea rows="3" cols="120" class="k-textbox" style="width:300px;" name="description" id="description" required="required"> </textarea></td> ';
	str1 += '			</tr> ';

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Truck Milage: </td> ';
	str1 += '			  <td><input type="number" class="k-textbox" style="width:300px;" name="milage" id="milage" value="" required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Maintance Check: </td> ';
	str1 += '			  <td><input type="date" class="k-textbox"  name="lastMaintanceCheck" id="lastMaintanceCheck" style="width:300px;"  required="required" /></td> ';
	str1 += '			</tr> ';	

	str1 += '			<tr> ';
	str1 += '			  <td width="100px">Status:</td> ';
	str1 += '				<td><select id="vStatus" placeholder="Select option..." style="width:200px;" value="" > ';
	str1 += '						<option>On Line</option> ';
	str1 += '						<option>Off Line</option> ';
	str1 += '					</select> ';
	str1 += '				</td> ';
	str1 += '			</tr> ';
	

	
				
	str1 += '		</table><br/>';	
	str1 += '		<button id="submit" class="k-button" onClick="javascript:doVehicle(0,2);">Save</button>  ';	
	//str1 += '		<button id="submit2" class="k-button" onClick="javascript:doVehicle('+x+',3);" >Delete</button>  ';	
	str1 += '	</div> ';
	str1 +='<span id="undo" style="display:none" class="k-button hide-on-narrow">Click here to open the window.</span>';

	document.getElementById("vehicleDialog").innerHTML = str1;
	
	// set kendo controls here
	$("#lastMaintanceCheck").kendoDateTimePicker({
		format: "yyyy-MM-dd HH:mm"
		//value: currentVehicleData[x].lastMaintanceCheck
	});
	$("#vStatus").kendoComboBox({

	});
	var myWindow = $("#vehicleDialog"),
                        undo = $("#undo");
	//myEditSchedualWin = myWindow;

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
			title: "Vehicle Maintiance Screen",
			visible: true,
			modal: true,
			actions: [
				//"Pin",
				//"Minimize",
				//"Maximize",
				"Close"
			],
			close: onClose
		}).data("kendoWindow").center().open();
	
}

function doVehicle(x,mode) {
	//alert(currentVehicleData[x].idx+" "+mode);
	var myWindow = $("#vehicleDialog"), undo = $("#undo");
	myVWin = myWindow;	
	myVWin.data("kendoWindow").close();
	undo.fadeOut();
	
	switch(mode) {
		case 1:
		// update
		upDateVehicle(x,franID, '0532');
		break;
		case 2:
		// insert
		newVehicle();
		break;
		case 3:
		// delete
		deleteVehicle(x,franID, '0532');
		break;
		case 9:
		
		break;
	};
}
