<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header('Content-Type: application/json');
header("Content-type: application/jsonp", true);
require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


$cid 		= "0532";//$_POST["cid"];
$mode 		= "X";//$_POST["mode"];
$franID		= "GD00KS";//$_POST["franID"];
//EDS EDIT HERE
//$cid 		= '0532';
//$mode 		= 'X';
//$franID		= 'GD00KS';

if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	//mysqli_close($connection);	

	switch ( $mode ) {
		case "U":
			//EDS EDIT HERE
			$start 		= $_POST['startD'];
			$end 		= $_POST['endD'];
			$id 		= $_POST["id"];
			$title 		= $_POST["title"];
			$descript 	= $_POST["description"];
			$timestamp1 = date('Y-m-d H:i:s', strtotime($start)); 
			$timestamp2 = date('Y-m-d H:i:s', strtotime($end));
			// add additonal fields here
			$SQL_query = "UPDATE caldata1 SET description = '".$descript."', startD = '$timestamp1', endD = '$timestamp2' WHERE id = ".$id." ";//AND ownerId = '".$franID."' AND delflg = 0; "; 	
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "I":
			//EDS EDIT HERE
			$start 		= $_POST['startD'];
			$end 		= $_POST['endD'];
			$id 		= $_POST["id"];
			$title 		= $_POST["title"];
			$taskId 	= $_POST["taskId"];
			$descript 	= $_POST["description"];
			$timestamp1 = date('Y-m-d H:i:s', strtotime($start)); 
			$timestamp2 = date('Y-m-d H:i:s', strtotime($end));
			// add additonal fields here
			//$SQL_query = "INSERT INTO caldata1 (id, taskId, startD, endD, isAllDay, title, startTimezone, endTimezone, description, recurrenceId, recurrenceRule, recurrenceException, franID) VALUES (NULL, 'A130', '".$startD."', '".$endD."', '0', '".$title."', '', '', '".$descript."', '0', '', '', '".$franID."');"; 	
			//$SQL_query = "INSERT INTO caldata1 (id, taskId, startD, endD, isAllDay, title, description, franID ) VALUES (NULL, '$taskId', '$timestamp1', '$timestamp2','0', '$title', '$description', '$franID');"; 
			//EDS EDIT HERE
			$SQL_query = "INSERT INTO caldata1 (id, taskId, startD, endD, isAllDay, title, startTimezone, endTimezone, description, recurrenceId, recurrenceRule, recurrenceException, franID, delflg) VALUES (NULL, '$taskId', '$timestamp1', '$timestamp2', '0', '$title', '', '', '$descript', '0', '', '', '$franID', '0')"; 	
			$query = mysqli_query($connection,$SQL_query);
		break;	
		case "D":
			$id 		= $_POST["id"];
			$SQL_query = "UPDATE caldata1 SET delflg = 1 WHERE id = ".$id." "; 	
			$query = mysqli_query($connection,$SQL_query);
		break;

		case "G":
			$id 		= $_POST["id"];
			$SQL_query = "SELECT id, taskId, Date_FORMAT(startD, '%Y/%m/%d %h:%i %p') as startD, Date_FORMAT(endD, '%Y/%m/%d %h:%i %p') as endD, isAllDay, title, startTimezone, endTimezone, description, recurrenceId, recurrenceRule, recurrenceException, franID FROM caldata1 WHERE franID = '".$franID."' ORDER BY id"; 	
			$query = mysqli_query($connection,$SQL_query);	
			// Create empty array to hold query results
			$someArray = [];
			if($query->num_rows > 0){		  
			  // Loop through query and push results into $someArray;
				while ($row = mysqli_fetch_assoc($query)) {
					//echo $query->num_rows;
					//EDS EDIT HERE
					// add additonal fields here
					array_push($someArray, [
					  'id'   				=> $row['id'],		  
					  'taskId' 				=> $row['taskId'],
					  'title' 				=> $row['title'],
					  'startD' 				=> $row['startD'],
					  'endD' 				=> $row['endD'],		  
					  'startTimezone'   	=> $row['startTimezone'],
					  'endTimezone' 		=> $row['endTimezone'],
					  'description' 		=> $row['description'],		  
					  'recurrenceId' 		=> null,
					  'recurrenceRule' 		=> null,
					  'recurrenceException' => null,		  
					  'franID' 				=> $row['franID'],
					  'isAllDay' 			=> $row['isAllDay'],
					  'status'				=> 'OK',
					]);
				}
			
			}
			// Convert the Array to a JSON String and echo it
			$someJSON = json_encode($someArray);
			echo $someJSON;
		break;
		
		default:
			// Query to run
			//EDS EDIT HERE
			// add additonal fields here
			$SQL_query = "SELECT id, taskId, Date_FORMAT(startD, '%Y/%m/%d %h:%i %p') as startD, Date_FORMAT(endD, '%Y/%m/%d %h:%i %p') as endD, isAllDay, title, startTimezone, endTimezone, description, recurrenceId, recurrenceRule, recurrenceException, franID FROM caldata1 WHERE franID = '".$franID."' AND delflg = 0; "; 	
			//$SQL_query = "SELECT id, taskId, '2017-10-16 10:00 AM' AS startD, '2017-10-16 11:00 AM' as endD, isAllDay, title, startTimezone, endTimezone, description, recurrenceId, recurrenceRule, recurrenceException, franID FROM caldata1 "; //WHERE franID = '".$franID."' AND delflg = 0; "; 	
			
			$query = mysqli_query($connection,$SQL_query);	
			// Create empty array to hold query results
			$someArray = [];
			if($query->num_rows > 0){		  
			  // Loop through query and push results into $someArray;
				while ($row = mysqli_fetch_assoc($query)) {
					//echo $query->num_rows;
					//EDS EDIT HERE
					// add additonal fields here
					array_push($someArray, [
					  'id'   				=> $row['id'],		  
					  'taskId' 				=> $row['taskId'],
					  'title' 				=> $row['title'],
					  'startD' 				=> $row['startD'],
					  'endD' 				=> $row['endD'],		  
					  'startTimezone'   	=> $row['startTimezone'],
					  'endTimezone' 		=> $row['endTimezone'],
					  'description' 		=> $row['description'],		  
					  'recurrenceId' 		=> null,
					  'recurrenceRule' 		=> null,
					  'recurrenceException' => null,		  
					  'franID' 				=> $row['franID'],
					  'isAllDay' 			=> $row['isAllDay'],
					  'status'				=> 'OK',
					]);
				}
			
			}
			// Convert the Array to a JSON String and echo it
			$someJSON = json_encode($someArray);
			echo $someJSON;
		break;
	};
		
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