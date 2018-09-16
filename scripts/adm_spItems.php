<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Content-Type: application/json');
//header("Content-type: application/jsonp", true);
require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';
// http://localhost/GD6/scripts/adm_spItems.php


$franID			= $_POST["franID"];
$cid			= $_POST["cid"]; 
$mode			= $_POST["mode"]; // I-insert, U-update, D-delete, S-select (default)

if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
		
	if ( $mode == "I" ) {
		// edit query here 
		$itemid 	= $_POST["itemid"];
		$descript 	= $_POST["descript"];
		$price 		= $_POST["price"];
		$qnotes 	= $_POST["qnotes"];
		$cUserID	= $_POST["cUserID"];
		$cUserName	= $_POST["cUserName"];
		
		//$SQL_query = "INSERT INTO `i_splist` (`idx`, `itemid`, `descript`, `price`, `qnotes`, `franID`) ";
		//$SQL_query .= "VALUES(NULL,'".$itemid."', '".$descript."', '".$price."', '".$qnotes."', '".$franID."')"; 	
				
		$SQL_query = "INSERT INTO `i_splist` (`idx`, `itemid`, `descript`, `price`, `franID`, `qnotes`, `updatedbyid`, `updatedby`, `updatedwhen`, `active`, `flg1`, `ts1`) "; 
		$SQL_query .= " VALUES (NULL, '".$itemid."', '".$descript."', ".$price.", '".$franID."', '".$qnotes."', '".$cUserID."', '".$cUserName."', CURRENT_TIMESTAMP, '0', 'Z', CURRENT_TIMESTAMP) ";
		
		
		// Query to run
		$query = mysqli_query($connection,$SQL_query);
	}

	if ( $mode == "U" ) {
		// edit query here 
		$idx 		= $_POST["idx"];
		$itemid 	= $_POST["itemid"];
		$descript 	= $_POST["descript"];
		$price 		= $_POST["price"];
		$qnotes 	= $_POST["qnotes"];

		
		$SQL_query 	= "UPDATE i_splist SET ";
		$SQL_query 	.= "itemid = '".$itemid."' ";
		$SQL_query 	.= ", descript = '".$descript."' ";
		$SQL_query 	.= ", price = '".$price."' ";
		$SQL_query 	.= ", qnotes = '".$qnotes."' ";	

		$SQL_query .= " WHERE idx = ".$idx." ;";
		//$SQL_query .= "";
		// Query to run
		$query = mysqli_query($connection,$SQL_query);	
	}
	if ( $mode == "D" ) {
		// edit query here 
		$idx 		= $_POST["idx"];
		
		// edit query here 
		$SQL_query 	= "UPDATE i_splist SET ";
		$SQL_query 	.= "flg1 = '0' ";
		$SQL_query .= " WHERE idx = ".$idx." ;";
		// Query to run
		$query = mysqli_query($connection,$SQL_query);	
	}
	// other tasks
	
	// housekeeping here
	
	// return data here
	// edit query here 
	$SQL_query = "SELECT idx, itemid, descript, price, franID, qnotes, updatedbyid, updatedby, updatedwhen, active FROM i_splist WHERE franID = '".$franID."' AND flg1 = 'Z' ORDER BY itemid ;"; 	
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
				'itemid' 		=> $row['itemid'],
				'descript' 		=> $row['descript'],		  
				'price' 		=> $row['price'],				
				'franID'      	=> $row['franID'],
				'qnotes'      	=> $row['qnotes'],

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