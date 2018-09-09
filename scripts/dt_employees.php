<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header('Content-Type: application/json');
header("Content-type: application/jsonp", true);
require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';
// http://localhost/GD6/scripts/dt_employees.php

$franID			= "GD00KS";//$_POST["franID"];
$cid			= "0532";//$_POST["cid"];  

if ( $cid == $appCid ) {

	// edit query here
	$SQL_query = "SELECT idx, userID, franID, firstName, lastName, fullName, email, phone, cell FROM employee WHERE franID = '".$franID."' AND active = 1 ;"; 	

	//$SQL_query = "SELECT idx, userID, franID, FirstName, LastName, email, phone1, accessLevel FROM users WHERE loginName = 'joel' AND pwd = 'none' AND franID = 'GD00KS' AND active = 1 ;";
	//$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	//$connection = mysqli_connect("mysql.greatdaymoving.com", "gd6user", "gd6user0532", "gd6testdb") or die ("Could not find or access the database.");
	
  // Query to run
  $query = mysqli_query($connection,$SQL_query);	
	// Create empty array to hold query results
  $someArray = [];

  if($query->num_rows > 0){
  
	  // Loop through query and push results into $someArray;
	  while ($row = mysqli_fetch_assoc($query)) {
		array_push($someArray, [
		  'idx'   		=> $row['idx'],		  
		  'userID' 		=> $row['userID'],
		  'firstName' 	=> $row['firstName'],
		  'lastName' 	=> $row['lastName'],
		  'fullName' 	=> $row['fullName'],
		  'status'   	=> 'OK',
		  'franID' 		=> $row['franID'],
		  'email'		=> $row['email'],
		  'phone'		=> $row['phone'],
		  'cell' 		=> $row['cell']
		  
		  //'delflg' 		=> $row['delflg'],
		  //'uid' 		=> $row['uid'],
		  //'edate' 		=> $row['edate'],
		  //'lupdte' 		=> $row['lupdte'],
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
	
}

else{

	$someArray = [];
	array_push($someArray, [
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};

?>