// showDetails1

function showDetailsA() {
	// showDetails_dt jobs details here
	// get more data if needed
	


// left panel
document.getElementById("left-pane").innerHTML = "loading... ";
var str1 = "";	
str1 += '<div class="pane-content">';
str1 += '	<h3>Inner splitter / left pane</h3>';
str1 += '	<p>Resizable and collapsible.</p>';
str1 += '</div>';
document.getElementById("left-pane").innerHTML = str1;
	
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
