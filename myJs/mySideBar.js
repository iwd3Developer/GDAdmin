
function sideBarA() {
var str1 = "";

// orginal	
/*	
str1 += '<ul class="control-sidebar-menu"> ';
str1 += '  <li> ';
str1 += '	<a href="#"> ';
str1 += '	  <i class="menu-icon fa fa-birthday-cake bg-red"></i> ';

str1 += '	  <div class="menu-info"> ';
str1 += '		<h4 class="control-sidebar-subheading">Deans Birthday</h4> ';

str1 += '		<p>Will be 23 on April 24th</p> ';
str1 += '	  </div> ';
str1 += '	</a> ';
str1 += '  </li> ';
str1 += '</ul> ';	

str1 += '<h3 class="control-sidebar-heading">Tasks Progress</h3> ';
str1 += '<ul class="control-sidebar-menu"> ';
str1 += '  <li> ';
str1 += '	<a href="javascript:;"> ';
str1 += '	  <h4 class="control-sidebar-subheading"> ';
str1 += '		Custom Template Design ';
str1 += '	  </h4> ';
str1 += '	</a> ';
str1 += '  </li> ';
str1 += '</ul> ';
		
*/
str1 += '<ul class="control-sidebar-menu"> ';
str1 += '  <li> ';
str1 += '	  <div class="menu-info"> ';
str1 += '		<h4 class="control-sidebar-subheading">HEADING</h4> ';
str1 += '		<p>FUTURE OPTIONS</p> ';
str1 += '	  </div> ';
str1 += '  </li> ';
str1 += '</ul> ';
document.getElementById("control-sidebar-menuA").innerHTML = str1;
	
}
function sideBarB() {
var str1 = "";

str1 += '<ul class="control-sidebar-menu"> ';
str1 += '  <li> ';
str1 += '	<a href="#"> ';
str1 += '	  <i class="menu-icon fa fa-birthday-cake bg-red"></i> ';

str1 += '	  <div class="menu-info"> ';
str1 += '		<h4 class="control-sidebar-subheading">FUTURE OPTIONS</h4> ';

str1 += '		<p>Will be 23 on April 24th</p> ';
str1 += '	  </div> ';
str1 += '	</a> ';
str1 += '  </li> ';
str1 += '</ul> ';	



document.getElementById("control-sidebar-settings-tab").innerHTML = str1;
	
}