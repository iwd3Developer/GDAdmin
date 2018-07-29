// jCom.js
// need myChat1.js
var JCom_obj ;
var JCom_t = "";
var JCom_History = [];
var JCom_i = 0;
ortcClient = RealtimeMessaging.createClient();
ortcClient.setClusterUrl('https://ortc-developers.realtime.co/server/ssl/2.1/');
ortcClient.connect('SkzSPG', 'testToken');

var JCom_x;
ortcClient.onConnected = function(ortc) {
console.log("Connected to " + ortcClient.getUrl());

ortcClient.subscribe('EDS1', true, function(ortc, channel, message) {
	//console.log(message);		
	JCom_obj = JSON.parse(message);
	JCom_History[JCom_i] = JCom_obj;
	//alert(JCom_obj.mto+" :: "+JCom_obj.mcmd+" :: "+JCom_obj.mmode+" :: "+cUserName);
	var dt = new Date();
	if (JCom_obj.mto == cUserName || JCom_obj.mto == 'ALL' ) {
		switch(JCom_obj.mcmd) {
			case "sMSG":
				// mmsg1 
				//JCom_x = JCom_obj.mmsg1;
				//localStorage.setItem("JCom_obj", JSON.stringify(JCom_obj));
				//mainBar(JCom_x);
				//var m = "<font size='4' color='blue'>In: "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+" - "+JCom_obj.mfrom+" Message: "+JCom_obj.mmsg1+", "+JCom_obj.mmsg2+"</font>";
				
				var cDate = new Date();
				var xDate = dateTime1("s");
				var str1 = "";
				//alert(xDate);
				if (JCom_obj.mmode == "SEND") {
					// out going
					str1 += '  <div class="direct-chat-msg right"> ';
					str1 += '    <div class="direct-chat-info clearfix"> ';				
					str1 += '  	<span class="direct-chat-name pull-right">Me('+JCom_obj.mfrom+')</span> ';
					str1 += '  	<span class="direct-chat-timestamp pull-left">'+xDate+'</span> ';
				}else{
					// in coming
					str1 += '  <div class="direct-chat-msg left"> ';
					str1 += '    <div class="direct-chat-info clearfix"> ';				
					str1 += '  	<span class="direct-chat-name pull-left">From('+JCom_obj.mto+')</span> ';
					str1 += '  	<span class="direct-chat-timestamp pull-right">'+xDate+'</span> ';
				
					var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");  
					popupNotification.show("In coming message: "+JCom_obj.mmsg1+" "+JCom_obj.mmsg2, "info");
				};
				
				str1 += '    </div> ';
				str1 += '    <img class="direct-chat-img" src="./dist/img/user1-128x128.jpg" alt="Message User Image"> ';
				str1 += '    <div class="direct-chat-text">	'+JCom_obj.mmsg1+" "+JCom_obj.mmsg2+'</div> ';
				str1 += '  </div> ';
				
				var el = document.getElementById("msgArea").innerHTML;
				document.getElementById("msgArea").innerHTML = str1 + el;
				//document.getElementById("msgArea").innerHTML += str1; //m +"<br/>";
				// cMessageLog
				var cM = [];
				cM = {'from':JCom_obj.mfrom ,'msg':JCom_obj.mmsg1+" "+JCom_obj.mmsg2};
				cMessageLog.push(cM);
				mssgList2();
				// msgArea
				//localStorage.setItem("JCom_obj", message);
				//jComWin('Messages','jCom1.html',false);
				//alert('Messages jCom1.html' );
				//alert(message+" :: "+JCom_obj.mcmd+" :: "+cUserID+" :: "+cUserName);
				//var p = {lat: 38.9822282, lng:  -94.6707917}
				//addMk1(p,'Demo','<p>hello world</p>');
				
				// alert-success
				//document.getElementById("alertSuccess1_data").innerHTML = '<strong>Success!</strong> This alert box could indicate a successful or positive action.'; //JCom_obj.mmsg1;
				//document.getElementById("alertSuccess1").style.visibility = "visible";  //"visible|hidden|collapse|initial|inherit"

			break;
			case "sCHAT":
				var cDate = new Date();
				var xDate = dateTime1("s");
				var str1 = "";
				//alert(JCom_obj.mmode);
				if (JCom_obj.mmode == "SEND") {
					// out going
					str1 += '  <div class="direct-chat-msg right"> ';
					str1 += '    <div class="direct-chat-info clearfix"> ';				
					str1 += '  	<span class="direct-chat-name pull-right">Me('+JCom_obj.mfrom+')</span> ';
					str1 += '  	<span class="direct-chat-timestamp pull-left">'+xDate+'</span> ';
				}else{
					// in coming
					str1 += '  <div class="direct-chat-msg left"> ';
					str1 += '    <div class="direct-chat-info clearfix"> ';				
					str1 += '  	<span class="direct-chat-name pull-left">From('+JCom_obj.mto+')</span> ';
					str1 += '  	<span class="direct-chat-timestamp pull-right">'+xDate+'</span> ';
				
					var popupNotification = $("#popupNotification").kendoNotification().data("kendoNotification");  
					popupNotification.show("In coming message: "+JCom_obj.mmsg1+" "+JCom_obj.mmsg2, "info");
				};
				
				str1 += '    </div> ';
				str1 += '    <img class="direct-chat-img" src="./dist/img/user1-128x128.jpg" alt="Message User Image"> ';
				str1 += '    <div class="direct-chat-text">	'+JCom_obj.mmsg1+" "+JCom_obj.mmsg2+'</div> ';
				str1 += '  </div> ';

				// notifi, add to messages if chat, store in db
				myNotifi1(m,"info");

				var el = document.getElementById("msgArea").innerHTML;
				document.getElementById("msgArea").innerHTML = str1 + el;
				var cM = [];
				cM = {msg:JCom_obj.mmsg2};
				cMessageLog.push(cM);
				mssgList2();
				
			break;
			case "sMAP":
				//OK
				var p = {lat: 38.9822282, lng:  -94.6707917}
				addMk1(p,'Demo','<p>hello world</p>');
			break;
		};			
		//playSound( 'xxx' );
	};		
	JCom_i++;
  });

  var myMessage = {
	foo: "bar"
  };

  //ortcClient.send('EDS1', JSON.stringify(myMessage));
  //document.getElementById("inMsg1").value = "On-Line!";
};
	


function JCom_send2(to,mode,cmd,msg) {
	//mode = SEND;
	var myMessage = {
		mto: to,
		mmode: mode,
		mfrom: cUserName, 
		mcmd: cmd,
		mid: "0532",
		mfranid: franID,
		mparams: "A,B,C",
		mmsg1: "Sent: ",
		mmsg2: msg,
        foo: msg
      };
	ortcClient.send('EDS1', JSON.stringify(myMessage));

}
function JCom_send() {
	//var myMessage = document.getElementById("msg1").value;
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
	//document.getElementById("msg1").value = "";
}