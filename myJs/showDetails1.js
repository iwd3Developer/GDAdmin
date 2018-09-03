// showDetails1

function showDetailsA(s) {
	// showDetails_dt jobs details here
	// get more data if needed
	switch(s) {
		case 0:
			setupA();
		break;
		default:
			setupB();
		break;
		
	};

	function setupA() {
		// get data
		document.getElementById("right-pane").innerHTML = "loading... ";
		var dbParam, xmlhttp, myObj, x, txt = "";
		//var i2 = 1;
		var data = new FormData();
		//EDIT AS NEEDED IT
		data.append("jobID", cJobNo);//MUST!!
		data.append("cid", cid);//MUST!!
		//data.append("mode", "x");//MUST!!
		//data.append("userID", cUserID);//MUST!!
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
				//dtAlerts = myObj;
				//idx, jobID, orderSeq, startAddr1, startCity, startState, startZip, gpsLat, gpsLon
				var str3 = '<p><b>Job Pickup/Droup Off Leg(s)</b></p>';
				str3 += '<ul class="list-group">';
				for (x in myObj) {
					// right panel	
					str3 += '<li class="list-group-item">'+myObj[x].orderSeq+' '+myObj[x].startAddr1+' '+myObj[x].startCity+' '+myObj[x].startState+' '+myObj[x].startZip+'</li>';
					//i2++;
				};
				str3 += '</ul>';
				document.getElementById("right-pane").innerHTML = str3;
			};
		};

		//xmlhttp.open("GET", "./scripts/dt_jobs2.php" + dbParam, true);
		//xmlhttp.send();

		xmlhttp.open("POST", "./scripts/dt_jobs2.php");//, false);//false-synchronous, true-asynchronously
		xmlhttp.send(data);
		
		// progress on transfers from the server to the client (downloads)
		function updateProgress (oEvent) {
		  if (oEvent.lengthComputable) {
			var percentComplete = oEvent.loaded / oEvent.total * 100;
			console.log(percentComplete);
			//document.getElementById("msg1").innerHTML = " "+percentComplete;
		  } else {
			console.log("Unable to compute progress information since the total size is unknown");
		  }
		}

		function transferComplete(evt) {
		  console.log("The transfer is complete.");
		  //document.getElementById("msg1").innerHTML = "loading complete. ";
			document.getElementById("notifications-alerts").innerHTML = dtAlerts.length;		
			//$("#divGrid1").data("kendoGrid").refresh();	
			//$('#divGrid2').data('kendoGrid').dataSource.read();
			//setTimeout(localCleanUp(),10000);
		}

		function transferFailed(evt) {
		  console.log("An error occurred while transferring the file.");
		}

		function transferCanceled(evt) {
		  console.log("The transfer has been canceled by the user.");
		}
	// end

		/*
		// left panel
		document.getElementById("left-pane").innerHTML = "loading... ";
		var str1 = "";	
		str1 += '<div class="pane-content">';
		str1 += '	<h3>Inner splitter / left pane</h3>';
		str1 += '	<p>Resizable and collapsible.</p>';
		str1 += '</div>';
		document.getElementById("left-pane").innerHTML = str1;
		*/
		
		// center-pane
		document.getElementById("center-pane").innerHTML = "loading... ";
		var str2 = "";	
		str2 += '<div class="pane-content">';
		str2 += '	<h3>Inner splitter / center pane</h3>';
		str2 += '	<p>Resizable and collapsible.</p>';
		str2 += '</div>';
		document.getElementById("center-pane").innerHTML = str2;

		
		
	} 
	
	function setupB() {
		/*
		// left panel
		document.getElementById("left-pane").innerHTML = "loading... ";
		var str1 = "";	
		str1 += '<div class="pane-content">';
		str1 += '	<h3>Inner splitter / left pane</h3>';
		str1 += '	<p>Resizable and collapsible.</p>';
		str1 += '</div>';
		document.getElementById("left-pane").innerHTML = str1;
		*/
		
		// center-pane
		document.getElementById("center-pane").innerHTML = "loading... ";
		var str2 = "";	
		str2 += '<div class="pane-content">';
		str2 += '	<h3>Inner splitter / center pane</h3>';
		str2 += '	<p>Resizable and collapsible.</p>';
		str2 += '</div>';
		document.getElementById("center-pane").innerHTML = str2;


		// right panel
		document.getElementById("right-pane").innerHTML = "loading... ";
		var str3 = "";	
		str3 += '<div class="pane-content">';
		str3 += '	<h3>Inner splitter / right pane</h3>';
		str3 += '	<p>Resizable and collapsible.</p>';
		str3 += '</div>';
		document.getElementById("right-pane").innerHTML = str3;

	}

}
