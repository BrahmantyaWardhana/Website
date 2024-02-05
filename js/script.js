// script.js

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
    // Implement your logic for fetching and updating data here
    // For example, you can make an AJAX request or fetch API data
    console.log('Fetching and updating data...');
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
