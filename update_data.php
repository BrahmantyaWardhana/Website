<?php
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
$sensor_id = isset($_GET['sensor_id']) ? $_GET['sensor_id'] : null;

if ($sensor_id === null) {
    // Handle the case where sensor_id is not provided
    echo json_encode(array(
        'error' => 'Sensor ID not provided'
    ));
    exit();
}

// Example query
$sql = "SELECT temperature, battery, camera_status FROM sensor_data WHERE sensor_id = ? ORDER BY sensor_data_id DESC LIMIT 1";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $sensor_id);

// Execute the statement
if ($stmt->execute()) {
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
} else {
    // Handle query execution error
    echo json_encode(array(
        'error' => 'Error executing the query: ' . $stmt->error
    ));
    exit();
}
?>
