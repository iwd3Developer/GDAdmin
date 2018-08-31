<?php
header("Access-Control-Allow-Origin: * ");
header('Content-Type: application/json');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods:  POST, GET, DELETE, PUT, PATCH, OPTIONS");
//header("Access-Control-Request-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


$franID			= "GD00KS";//$_POST["franID"];
//$cid			= $_POST["cid"]; 
$cid			= "0532";
$mode 			= "x";
	
if ( $cid == $appCid ) {
	// Get / Read Only
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	
	if ( $mode == 'U" ) {
		
	};
	
	if ( $mode == 'I" ) {
		
	};
	
	if ( $mode == 'D" ) {
		
	};
	
	// return data here
	// edit query here 
	$result = $connection->query("SELECT idx, clientID, FirstName, LastName, addr1, city, state, zipcode, phone1, phone2, phone3, moveDate, franID FROM jobp1  "); //.$table." LIMIT ".$limit);
	$outp = array();
	$outp = $result->fetch_all(MYSQLI_ASSOC);
	echo json_encode($outp);
	
}else{

	$someArray = [];
	array_push($someArray, [
		'status'   => 'SECURITY ERROR',
		'result'   => 'xx'
	]);
	//$someJSON = json_encode($someArray);
	echo json_encode($someArray);
};// end cid check

?>