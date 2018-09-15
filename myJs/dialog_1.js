
/*
 * https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog
 add:
   <div id="dialog_1">
      Content of the Dialog
  </div> 
 
 */
//create this function for every dialog to be called
function a_dialog_2(){
	//var dialog2 = $("#dialog_2").data("kendoDialog");
	//dialog2.open();
}

//each dialog function if required

function d_2(a) {
	alert("Done "+a);
}

 function a_dialog_videoEnd(a){
	//dialog_1_content = "Your Training Video Has Completed, Thank You.";
	var dialog1 = $("#dialog_1").kendoDialog({
	   width: "400px",
	   title: "Training Video",
	   modal: true,
	   buttonLayout: "normal", //"stretched",
	   visible: true,
	   content: a 
	});
}

 //each dialog and its content here
//var dialog_2_content = "<p>Have A Nice Day!<p>";
/*
$("#dialog_2").kendoDialog({
   width: "400px",
   title: "Dialog 2",
   modal: true,
   buttonLayout: "normal", //"stretched",
   visible: false,
   content: dialog_2_content,
   actions: [
       { text: 'Yes',
    	   action: function (e) {
    		   d_2('yes');
           // Returning false will prevent the closing of the dialog
           return true;
         },
       },
       { text: 'No',
    	   action: function (e) {
    		   d_2('no');
           // Returning false will prevent the closing of the dialog
           return true;
         },
       }
   ],
});
//end of the above dialog
*/


// create this function for every dialog to be called

// each dialog function if required

/*
// each dialog and its content here
var dialog_1_content = "<p>...A new version of <strong>Kendo UI</strong> is available. Would you like to download and install it now?<p>";
$("#dialog_1").kendoDialog({
      width: "400px",
      title: "Software Update",
      buttonLayout: "stretched",
      visible: false,
      content: dialog_1_content,
      actions: [
          { text: 'Skip this version' },
          { text: 'Remind me later' },
          {
              text: 'Install update',
              primary: true,
              action: function (e) {
                  alert("Install update action was clicked");
                  // Returning false will prevent the closing of the dialog
                  return true;
                },
          }
      ],
  });
// end of the above dialog
*/




