<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

$afranID			= "GD00KS";//$_POST["afranID"];
$cid			= "0532";//$_POST["cid"]; 
$userID			= 0 ; //$_POST["userID"];
$mode			= "X";//$_POST["mode"]; // I-insert, U-update, D-delete, S-select (default)

if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
		
	if ( $mode == "I" ) {
		// edit query here 
		$SQL_query = "SELECT idx, tDesc, aFrom, aDateTime, aStatus, afranID, aLevel FROM alerts WHERE afranID = '".$franID."' AND aFlg1 = 0 ;"; 	
		// Query to run
		$query = mysqli_query($connection,$SQL_query);
	}

	if ( $mode == "U" ) {
		// edit query here 
		$id 		= $_POST["idx"];
		$tDesc 		= $_POST["tDesc"];
		$tStatus 	= $_POST["tStatus"];
		$aLevel 	= $_POST["aLevel"];
		
		$SQL_query 	= "UPDATE tasks SET tDesc = '".$aDesc."', "; 
		$SQL_query .= "tStatus = '".$tStatus."', "; 
		$SQL_query .= "aLevel = '".$aLevel."' ";

		$SQL_query .= " WHERE idx = ".$id." ;";
		//$SQL_query .= "";
		// Query to run
		$query = mysqli_query($connection,$SQL_query);	
	}
	if ( $mode == "D" ) {
		// edit query here 
		$id = 2; //$_POST["idx"];
		$SQL_query = "DELETE TABLE tasks WHERE idx = ".$id." ;"; 	
		// Query to run
		$query = mysqli_query($connection,$SQL_query);	
	}
	// other tasks
	
	// housekeeping here
	
	// return data here
	// edit query here 
	$SQL_query = "SELECT idx, tDesc, tUserID, tStatus, tDateTimeIn, tCompDateTime, tCompleteBy, tFranID, tFlg1 FROM tasks ";//WHERE tfranID = '".$tfranID."' AND tFlg1 = 0 ;"; 	
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
				'tDesc' 		=> $row['tDesc'],
				'tUserID' 		=> $row['tUserID'],		  
				'tStatus' 		=> $row['tStatus'],				
				'tDateTimeIn'   => $row['tDateTimeIn'],
				'tCompDateTime' => $row['tCompDateTime'],
				'tCompleteBy' 	=> $row['tCompleteBy'],
				'tFranID' 		=> $row['tFranID'],
				// keep
				'status'   		=> 'OK',
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