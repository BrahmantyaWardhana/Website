// Click function for containers

// Function to navigate to a different page based on the sensor ID
function navigateToPage(sensorId) {
  // Construct the URL for the destination page
  var destinationPage = sensorId + '.html';

  // Navigate to the destination page
  window.location.href = destinationPage;
}

// display sensor data function
document.addEventListener('DOMContentLoaded', function () {
  const refreshButton = document.getElementById('refreshButton');
  const sensorsContainer = document.getElementById('sensorsContainer');

  refreshButton.addEventListener('click', function () {
      fetchDataAndUpdateValues();
  });

  function fetchDataAndUpdateValues() {
      // Assuming your server provides data for all sensors in an array
      fetch('/getAllSensorData')
          .then(response => response.json())
          .then(data => {
              // Clear existing sensor containers
              sensorsContainer.innerHTML = '';

              // Iterate through each sensor data
              data.forEach((sensorData, index) => {
                  createSensorContainer(sensorData, index + 1);
              });
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }

  function createSensorContainer(sensorData, sensorNumber) {
      const sensorContainer = document.createElement('div');
      sensorContainer.id = 'sensor' + sensorNumber;

      const temperatureElement = document.createElement('p');
      temperatureElement.innerHTML = `Temperature: <span id="temperature">${sensorData.temperature}</span>`;
      sensorContainer.appendChild(temperatureElement);

      const batteryElement = document.createElement('p');
      batteryElement.innerHTML = `Battery: <span id="battery">${sensorData.battery}</span>`;
      sensorContainer.appendChild(batteryElement);

      const cameraStatusElement = document.createElement('p');
      cameraStatusElement.innerHTML = `Camera Recording Status: <span id="cameraStatus">${sensorData.cameraStatus}</span>`;
      sensorContainer.appendChild(cameraStatusElement);

      sensorsContainer.appendChild(sensorContainer);
  }
});

