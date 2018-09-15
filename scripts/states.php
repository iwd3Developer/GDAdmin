<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header('Content-Type: application/json');
header("Content-type: application/jsonp", true);
require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';
//


//$id					= $_POST["id"];
//$name 				= $_POST["name"];
//$abbreviations 		= $_POST["abbreviations"];

//$truckmodel 			= $_POST["truckmodel"];
//$description 			= $_POST["description"];
//$milage 				= $_POST["milage"];
//$status 				= $_POST["status"];
//$lastMaintanceCheck 	= $_POST["lastMaintanceCheck"];

//$mode 	= $_POST["mode"];
//$cid 	= $_POST["cid"];
//$franID	= $_POST["franID"];


/*
//TEST ZONE 
$idx			= 52;
$trucknumber 	= '32551';
$truckname 		= "ABC1gggg";
$truckmodel 			= "truckmodel";
$description 			= "description";
$milage 				= 23.8;
$status 				= "status";
$lastMaintanceCheck 	= "2017-11-22 13:30:13";

$mode 			= 'X';
$cid 			= '0532';
$franID			= 'GD00KS';
*/
$cid 			= '0532';

// EDIT ZONE


if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	//echo $sqlA;
	/*
	switch ( $mode ) {
		case "U":
			$SQL_query = "UPDATE employee SET firstname = '$firstname', lastname = '$lastname', phone = '$phone', cell = '$cell' WHERE idx = $idx AND franID = '$franID' ;" ;
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "I":
			$SQL_query = "INSERT INTO employee (firstname, lastname, phone, cell, franID) VALUES('$firstname', '$lastname', '$phone', '$cell', '$franID');";
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "D":
			$SQL_query = "DELETE FROM employee WHERE idx = $idx  ";
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;		
	};
	*/

	
	$SQL_query = "SELECT id, name, abbreviations FROM states ; ";
	$query = mysqli_query($connection,$SQL_query);	
	$someArray = [];
	if($query->num_rows > 0){		  
	  // Loop through query and push results into $someArray;
		while ($row = mysqli_fetch_assoc($query)) {
			//echo $query->num_rows;
			//EDS EDIT HERE
			array_push($someArray, [
			  'id'   				=> $row['id'],
			  
			  // edit fields
			  'name' 	=> $row['name'],
			  'abbreviations' 	=> $row['abbreviations'],
			  'status'   => 'OK'
			]);
		}
	
	}
	// Convert the Array to a JSON String and echo it
	$someJSON = json_encode($someArray);
	echo $someJSON;

		
}else{
	$someArray = [];
		array_push($someArray, [
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);		
		$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};

?>