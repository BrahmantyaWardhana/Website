<?php
// Database connection details
$servername = "localhost";
$username = "pi";
$password = "raspberry";
$dbname = "ipro497";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ensure sensor_id is provided
if (!isset($_GET['sensor_id'])) {
    die("Sensor ID not provided");
}

// Prepare and execute query
$sql = "SELECT temperature, battery, camera_status FROM sensor_data WHERE sensor_id = ? ORDER BY sensor_data_id DESC LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $_GET['sensor_id']);
$stmt->execute();
$stmt->store_result();

// Check if any rows are returned
if ($stmt->num_rows > 0) {
    // Bind the result variables
    $stmt->bind_result($temperature, $battery, $cameraStatus);
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
} else {
    // No data found for the provided sensor ID
    echo json_encode(array(
        'error' => 'No data found for the provided sensor ID'
    ));
}

?>
