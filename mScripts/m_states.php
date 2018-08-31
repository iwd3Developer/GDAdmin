<?php
header("Access-Control-Allow-Origin: * ");
header('Content-Type: application/json');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods:  POST, GET, DELETE, PUT, PATCH, OPTIONS");
//header("Access-Control-Request-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

//$table = $_POST["table"];// $_POST["pwd"];
//$limit = $_POST["limit"];


//$afranID		= $_POST["afranID"];
$cid			= "0532";//$_POST["cid"]; 
//$userID			= 0 ; //$_POST["userID"];
$mode			= "x";//$_POST["mode"]; // I-insert, U-update, D-delete, S-select (default)

if ( $cid == $appCid ) {
	// Get / Read Only
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	
	// return data here
	// edit query here 
	$result = $connection->query("SELECT id, name, abbreviations FROM states "); //.$table." LIMIT ".$limit);
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