document.addEventListener('DOMContentLoaded', function () {
  const refreshButton = document.getElementById('refreshButton');
  const sensorsContainer = document.getElementById('sensorsContainer');

  // Add click event listener to the refresh button
  refreshButton.addEventListener('click', function () {
    fetchDataAndUpdateValues();
  });

  // Function to navigate to a different page based on the sensor ID
  function navigateToPage(sensorId) {
    // Construct the URL for the destination page
    var destinationPage = sensorId + '.html';

    // Navigate to the destination page
    window.location.href = destinationPage;
  }

  // Function to fetch data and update values
  function fetchDataAndUpdateValues() {
    // Loop through each sensor and make an AJAX request
    for (let i = 1; i <= 16; i++) {
      updateValues(i);
    }
  }

  // Function to update values for a specific sensor
  function updateValues(sensorId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        updateSensorValues(sensorId, data);
      }
    };
    // Replace "update_data.php" with the actual server-side script URL
    xhr.open("GET", "update_data.php?sensor_id=" + sensorId, true);
    xhr.send();
  }

  // Function to update sensor values on the webpage
  function updateSensorValues(sensorId, data) {
    document.getElementById("temperature" + sensorId).innerText = data.temperature;
    document.getElementById("battery" + sensorId).innerText = data.battery;
    document.getElementById("cameraStatus" + sensorId).innerText = data.cameraStatus;
  }

  // Add click event listeners to each sensor div
  for (let i = 1; i <= 16; i++) {
    const sensorId = 'sensor' + i;
    const sensorDiv = document.getElementById(sensorId);

    // Add click event listener to each sensor div
    sensorDiv.addEventListener('click', function () {
      navigateToPage(sensorId);
    });
  }
});
