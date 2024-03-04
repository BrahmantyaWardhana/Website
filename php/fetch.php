<?php
include('dbh.php');

// Set the Content-Type header to indicate that the response is JSON
header('Content-Type: application/json');

$sql = "SELECT sensor_id, temperature, battery, camera_status FROM sensor_data ORDER BY sensor_data_id LIMIT 16";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();
?>
