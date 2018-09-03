<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header('Content-Type: application/json');
header("Content-type: application/jsonp", true);
require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

$franID		= "GD00KS";//$_POST["franID"];
$cid			= "0532";//$_POST["cid"]; 
$userID			= 0;//$_POST["cUserID"];
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
	$SQL_query = "SELECT idx, aDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts WHERE afranID = '$franID' AND aFlg1 = 0 ;"; 	
	// Query to run
	$query = mysqli_query($connection,$SQL_query);	
	// Create empty array to hold query results
	$someArray = [];

	if($query->num_rows > 0){
  
		// Loop through query and push results into $someArray;
		while ($row = mysqli_fetch_assoc($query)) {
			//echo $query->num_rows;
			array_push($someArray, [
				'idx'   		=> $row['idx'],
				// edit columns below
				'aDesc' 		=> $row['aDesc'],
				'aFrom' 		=> $row['aFrom'],		  
				'aDateTime' 	=> $row['aDateTime'],				
				'afranID'      	=> $row['afranID'],
				'aLevel'      	=> $row['aLevel'],

				// keep
				'status'   		=> 'OK'
			]);
		}

		// Convert the Array to a JSON String and echo it
		$someJSON = json_encode($someArray);
		echo $someJSON;

	}else{
		array_push($someArray, [
			'status'   => 'ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
	};// end query
	
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