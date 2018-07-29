// myChat.js
var chatHtmlA = [];
function chatUpdate(n,i,m) {
var str1 = "";
var xCHtmlA = "";

str1 += ' <div class="direct-chat-msg">';
str1 += '   <div class="direct-chat-info clearfix">';
str1 += ' 	<span class="direct-chat-name pull-left">'+n+'</span>';
str1 += ' 	<span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>';
str1 += '   </div>';

str1 += '   <img class="direct-chat-img" src="./dist/img/'+i+'" alt="Message User Image">';
str1 += '   <div class="direct-chat-text">'+m+'</div> ';
 
str1 += ' </div>';

chatHtmlA.push(str1);
$("#xx").append(str1);
str1 = "";	

}

function sendChat() {
	// ChatTxt
	var d = document.getElementById("ChatTxt").value;
	// get user name, and matching image
	chatUpdateGet('Tim Jones','user1-128x128.jpg',d);
}

function sendChat2() {
	//alert( document.getElementById("sendTo").value +" "+ cUserName);
	var myMessage = {
		//mto: "Edgar Sanders", //document.getElementById("sendTo").value,
		mto: document.getElementById("sendTo").value,
		mmode: "SEND",
		mfrom: cUserName, //"System",
		mcmd: "sMSG",
		mid: "0532",
		mfranid: franID,
		mparams: "A,B,C",
		mmsg1: "Sent: ",
		mmsg2: document.getElementById("ChatTxt").value,
        foo: document.getElementById("ChatTxt").value
      };
	ortcClient.send('EDS1', JSON.stringify(myMessage));
	document.getElementById("ChatTxt").value = "";
	// get user name, and matching image
	//chatUpdateGet('Tim Jones','user1-128x128.jpg',d);
}

function mssgList2() {
	//alert("Here "+ cMessageLog.length);
	// cMessageLog
	var str1 = "";
	var dT = new Date();
	for (var i=0;i<cMessageLog.length;++i)
	{
		str1 += ' <li> ';
			str1 += ' <a href="#"> ';
				str1 += ' <div class="pull-left"> ';
					str1 += ' <img src="./dist/img/user2-160x160.jpg" width="30" height="30" class="img-circle" alt="User Image"> ';
				str1 += ' </div> ';
				str1 += ' <h5> ';
					str1 += dateTime1("t")+':'+cMessageLog[i].from+' - '+cMessageLog[i].msg+' ';
					//str1 += ' <small><i class="fa fa-clock-o"></i> 5 mins</small> ';
					//str1 += ' <p>Alls well in the USA!</p> ';
				str1 += ' </h5> ';
			str1 += ' </a> ';
		str1 += ' </li> ';
	};
	document.getElementById("message_menu").innerHTML = str1;
	document.getElementById("message_menu_cnt").innerHTML = "You have "+i+" messages";	
	document.getElementById("message_menu_cnt2").innerHTML = i;	
 
}

function chatUpdateGet(n,i,m) {
document.getElementById("ChatTxt").value = "";
var str1 = "";
var cDate = new Date();
var xDate = dateTime1("X");
//alert(dateTime1("X"));

str1 += '  <div class="direct-chat-msg right"> ';
str1 += '    <div class="direct-chat-info clearfix"> ';
str1 += '  	<span class="direct-chat-name pull-right">'+n+'</span> ';
str1 += '  	<span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span> ';
str1 += '    </div> ';
str1 += '    <img class="direct-chat-img" src="./dist/img/'+i+'" alt="Message User Image"> ';
str1 += '    <div class="direct-chat-text">	'+m+'</div> ';
str1 += '  </div> ';
				

chatHtmlA.push(str1);
$("#xx").append(str1);
						
}

function chatUsers() {
var str1 = "";	
	
str1 += '  <option>All</option> ';
str1 += '  <option>option 2</option> ';
str1 += '  <option>option 3</option> ';
str1 += '  <option>option 4</option> ';
str1 += '  <option>option 5</option> ';

//document.getElementById("sendTo").innerHTML = str1;
str1 = "";
}

function mssgList() {
	//alert("Here");
var str1 = "";
for (var i=0;i<8;++i)
{
str1 += ' <li> ';
str1 += ' <a href="#"> ';
str1 += ' <div class="pull-left"> ';
str1 += ' <img src="./dist/img/user2-160x160.jpg" width="30" height="30" class="img-circle" alt="User Image"> ';
str1 += ' </div> ';
str1 += ' <h5> ';
str1 += ' Dean Sanders ';
str1 += ' <small><i class="fa fa-clock-o"></i> 5 mins</small> ';
//str1 += ' </h6> ';
str1 += ' <p>Alls well in the USA!</p> ';
str1 += ' </h5> ';
str1 += ' </a> ';
str1 += ' </li> ';
};
document.getElementById("message_menu").innerHTML = str1;
document.getElementById("message_menu_cnt").innerHTML = "You have "+i+" messages";	
document.getElementById("message_menu_cnt2").innerHTML = i;			  
}
