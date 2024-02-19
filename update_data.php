<?php
$servername = "localhost";
$username = "pi";
$password = "raspberry";
$dbname = "ipro497";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Example query
$sql = "SELECT temperature, battery, camera_status FROM sensor_data WHERE sensor_id = ? ORDER BY sensor_data_id DESC LIMIT 1";

// Prepare and bind parameters (replace "your_table" with your actual table name)
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $sensor_id);

// Set the sensor_id based on the request
$sensor_id = $_GET['sensor_id'];

// Execute the statement
$stmt->execute();

// Bind the result variables
$stmt->bind_result($temperature, $battery, $cameraStatus);

// Fetch the values
$stmt->fetch();

// Close the statement
$stmt->close();

// Close the connection
$conn->close();

// Return the data as JSON
echo json_encode(array(
    'temperature' => $temperature,
    'battery' => $battery,
    'cameraStatus' => $cameraStatus
));
?>