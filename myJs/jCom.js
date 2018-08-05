// jCom.js
// need myChat1.js
var JCom_obj ;
var JCom_t = "";
var JCom_History = [];
var JCom_i = 0;

	ortcClient = RealtimeMessaging.createClient();
    ortcClient.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');
    ortcClient.connect('SkzSPG', 'testToken');//connect 'SkzSPG' 'MfeioN'
	var incMsg = "";
	var userID = "Dean";
    ortcClient.onConnected = function(ortc) {
      //alert("Connected to " + ortcClient.getUrl());	  
	  document.getElementById("jC1").innerHTML  = "Connected to " + ortcClient.getUrl();
 
		ortcClient.subscribe('EDS1', true, function(ortc, channel, message) {
			//console.log(message);
			//alert(message);		
			obj = JSON.parse(message);
			incMsg += obj.mfrom +"\n";
			//document.getElementById("msg").value = incMsg;
			if ( obj.mto == userID || obj.mto == "ALL" ) {
				incMsgProcessing(obj);
			};
		});

    };

function incMsgProcessing(inc_obj) {
	// document.getElementById("msg").value = t;
	//alert(inc_obj.mto+" CMD " + inc_obj.mcmd) ;
	//document.getElementById("msg").value = inc_obj.foo;
	switch(inc_obj.mcmd) {
		case "sMSG":
		// process chat messages
		inComingMsg(inc_obj);
		break;
		case "sMAPM":
		// map marker
		
		break;
		case "sALTM":
		// alert message
		
		break;
		case "sPING":
		// echo Back
		
		break;
	
	};
	
	/*
	commands
	sMSG - messages / chat
	sMAPM - place marker on google map
	sALTM - Alert opoup message no responce
	sPING - check to see if alive responce foo:ok
	sCMD - custom command event using mparams[0] for event 1-x params
	sSNOT - system notice dialog
	sJOBU - job update required (query)
	sPMSG - private message / chat
	
	*/
}


function incMsg_send() {
	//alert("incMsg_send()"+document.getElementById("btn-input").value);
	//var myMessage = document.getElementById("msg1").value;
	var myMessage = {
		mto: "Edgar",
		mfrom: "Dean",
		mcmd: "sMSG",
		mid: "0532",
		mparams: "A,B,C",
		mmsg1: "Hello world",
		mmsg2: "This is it",
        foo: document.getElementById("btn-input").value
      };
	ortcClient.send('EDS1', JSON.stringify(myMessage));
	document.getElementById("btn-input").value = "";
	
	var str2 = "";

	str2 += '<div id="chatR">';
	str2 += '<li class="right clearfix"><span class="chat-img pull-right"> ';
	str2 += '<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" /> ';
	str2 += '</span> ';
	str2 += '	<div class="chat-body clearfix"> ';
	str2 += '	<div class="header"> ';
	str2 += '		<strong class="primary-font">'+myMessage.mfrom+'</strong> <small class="pull-right text-muted"> ';
	str2 += '			<span class="glyphicon glyphicon-time"></span>12 mins ago</small> ';
	str2 += '	</div> ';
	str2 += '	<p> ' + myMessage.foo;
	//str2 += '		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare ';
	//str2 += '		dolor, quis ullamcorper ligula sodales. ';
	str2 += '	</p> ';
	str2 += '</div> ';
	str2 += '</li> ';
	str2 += '</div> ';
	document.getElementById("jC1").innerHTML += str2;

}

function inComingMsg(inc_obj) {
//alert("inComingMsg ");
var str1 = "";


str1 += '<div id="chatL">';
str1 += '<li class="left clearfix"><span class="chat-img pull-left"> ';
str1 += '<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" /> ';
str1 += '</span> ';
str1 += '<div class="chat-body clearfix"> ';
str1 += '	<div class="header"> ';
str1 += '		<strong class="primary-font">'+inc_obj.mfrom+'</strong> <small class="pull-right text-muted"> ';
str1 += '			<span class="glyphicon glyphicon-time"></span>12 mins ago</small> ';
str1 += '	</div> ';
str1 += '	<p> ' + inc_obj.foo;
//str1 += '		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare ';
//str1 += '		dolor, quis ullamcorper ligula sodales. ';
str1 += '	</p> ';
str1 += '</div> ';
str1 += '</li> ';
str1 += '</div>';

document.getElementById("jC1").innerHTML += str1;
//alert("ok "+str1);

}

function getMsg() {

var str1 = "";

str1 += '<li class="left clearfix"><span class="chat-img pull-left"> ';
str1 += '<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" /> ';
str1 += '</span> ';
str1 += '<div class="chat-body clearfix"> ';
str1 += '	<div class="header"> ';
str1 += '		<strong class="primary-font">Jack Sparrow</strong> <small class="pull-right text-muted"> ';
str1 += '			<span class="glyphicon glyphicon-time"></span>12 mins ago</small> ';
str1 += '	</div> ';
str1 += '	<p> ';
str1 += '		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare ';
str1 += '		dolor, quis ullamcorper ligula sodales. ';
str1 += '	</p> ';
str1 += '</div> ';
str1 += '</li> ';
document.getElementById("chatL").innerHTML = str1;
//alert("ok "+str1);

var str2 = "";

str2 += '<li class="right clearfix"><span class="chat-img pull-right"> ';
str2 += '<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" /> ';
str2 += '</span> ';
str2 += '	<div class="chat-body clearfix"> ';
str2 += '		<div class="header"> ';
str2 += '			<small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small> ';
str2 += '			<strong class="pull-right primary-font">Bhaumik Patel</strong> ';
str2 += '		</div> ';
str2 += '		<p> ';
str2 += '			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare ';
str2 += '			dolor, quis ullamcorper ligula sodales. ';
str2 += '		</p> ';
str2 += '	</div> ';
str2 += '</li> ';
document.getElementById("chatR").innerHTML = str2;
}

	
