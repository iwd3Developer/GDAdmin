<?php
header("Access-Control-Allow-Origin: * ");
header('Content-Type: application/json');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods:  POST, GET, DELETE, PUT, PATCH, OPTIONS");
header("Access-Control-Request-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

$table = $_POST["table"];// $_POST["pwd"];
$limit = $_POST["limit"];


//$afranID		= $_POST["afranID"];
//$cid			= $_POST["cid"]; 
//$userID			= 0 ; //$_POST["userID"];
$mode			= "x";//$_POST["mode"]; // I-insert, U-update, D-delete, S-select (default)

if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
		
	if ( $mode == "I" ) {
		// edit query here 
		$aDesc 		= $_POST["aDesc"];
		$aStatus 	= $_POST["aStatus"];
		$aLevel 	= $_POST["aLevel"];
		$aFrom		= $_POST["aFrom"];
		$aDateTime	= $_POST["aDateTime"];
		
		$SQL_query = "INSERT INTO `alerts` (`idx`, `aDesc`, `aFrom`, `aDateTime`, `aStatus`, `aFranID`, `aLevel`) ";
		$SQL_query .= "VALUES(NULL,'".$aDesc."', '".$aFrom."', '".$aDateTime."', '".$aStatus."', '".$afranID."', '".$aLevel."')"; 	
		// Query to run
		$query = mysqli_query($connection,$SQL_query);
	}

	if ( $mode == "U" ) {
		// edit query here 
		$id 		= $_POST["idx"];
		$aDesc 		= $_POST["aDesc"];
		$aStatus 	= $_POST["aStatus"];
		$aLevel 	= $_POST["aLevel"];
		
		$SQL_query 	= "UPDATE alerts SET aDesc = '".$aDesc."', "; 
		$SQL_query .= "aStatus = '".$aStatus."', "; 
		$SQL_query .= "aLevel = '".$aLevel."' ";

		$SQL_query .= " WHERE idx = ".$id." ;";
		//$SQL_query .= "";
		// Query to run
		$query = mysqli_query($connection,$SQL_query);	
	}
	if ( $mode == "D" ) {
		// edit query here 
		$id = 2; //$_POST["idx"];
		$SQL_query = "DELETE TABLE alerts WHERE idx = ".$id." ;"; 	
		// Query to run
		$query = mysqli_query($connection,$SQL_query);	
	}
	// other tasks
	
	// housekeeping here
	
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