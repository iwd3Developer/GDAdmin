<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header('Content-Type: application/json');
header("Content-type: application/jsonp", true);
require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


$jobID			= 1;//$_POST["jobID"];
//$cid			= $_POST["cid"]; 
$cid			= "0532";

if ( $cid == $appCid ) {

	// edit query here 
	$SQL_query = "SELECT idx, jobID, orderSeq, startAddr1, startCity, startState, startZip, gpsLat, gpsLon, routeDistance, routeStatus, locationType, arivalTime, departureTime, vehicleIds  FROM jobp2 WHERE jobID = '$jobID' AND delflg = 0 ORDER BY orderSeq;"; 	
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
  // Query to run
  $query = mysqli_query($connection,$SQL_query);	
	// Create empty array to hold query results
  $someArray = [];

  if($query->num_rows > 0){
  
	  // Loop through query and push results into $someArray;
	  while ($row = mysqli_fetch_assoc($query)) {
			//echo $query->num_rows;
		array_push($someArray, [
		  'idx'   => $row['idx'],
		  
		  'jobID' 		=> $row['jobID'],
		  'orderSeq' 	=> $row['orderSeq'],
		  'startAddr1' 	=> $row['startAddr1'],		  
		  'startCity' 	=> $row['startCity'],
		  'startState' 	=> $row['startState'],
		  'startZip' 	=> $row['startZip'],
		  'gpsLat' 		=> $row['gpsLat'],
		  'gpsLon' 		=> $row['gpsLon'],
		  'routeDistance' => $row['routeDistance'],
		  'routeStatus' => $row['routeStatus'],
		  'locationType' => $row['locationType'],
		  'arivalTime' => $row['arivalTime'], 
		  'departureTime' => $row['departureTime'],
		  'vehicleIds'  => $row['vehicleIds'],

		  'status'   => 'OK'

		  // end add columns	
		  //'delflg' 		=> $row['delflg'],
		  //'edate' 		=> $row['edate'],
		  //'flg1' 		=> $row['flg1']
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
  };
	
}else{

	$someArray = [];
	array_push($someArray, [
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};

?>