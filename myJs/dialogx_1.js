
/*
1. edit function if required
2. title
3. content
4. action and events
5. modal t/false
6. closeable t/f 
7. width
8. add div for dialog on pageX
*/

// <div id="dialog_1">................</div>

// dialog_1 events
function onInitOpen_d1(e) {
//alert("event :: initOpen");
}

function onOpen_d1(e) {
//alert("event :: open");
}

function onShow_d1(e) {
//alert("event :: show");
}

function onHide_d1(e) {
alert("event :: hide");
}

function onClose_d1(e) {
//show.fadeIn();
//dialog_1.data("kendoDialog").close();

//alert("event :: close");
}
function onCancel_d1(e) {
alert("action :: cancel");
}
// end dialog_1 events



// dialogs
function onOK_d1(e) {
	//alert("action :: OK");
	dialog_1.data("kendoDialog").close();//IMPORTANT!
}

//var dialog_1;	

function init_d1() {
	
dialog_1.kendoDialog({
	width: "450px",
	title: "Software Update",
	closable: true,
	modal: false,
	content: "<p>On Job Board <strong>Kendo UI</strong> is available. Would you like to download and install it now?<p>",
	actions: [
		{ text: 'Skip this version' },
		{ text: 'Remind me later' },
		{ text: 'Install update', primary: true, action: onOK_d1 }
	],
	initOpen: onInitOpen_d1,
		open: onOpen_d1,
		//close: onClose_d1,
		show: onShow_d1,
		hide: onHide_d1
});
dialog_1 = $('#dialog1');
dialog_1.data("kendoDialog").open();

}
// dialog_1.data("kendoDialog").close();//IMPORTANT!
//dialog_1.data("kendoDialog").open();
// end dialogs
		