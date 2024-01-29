// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// display sensor data function
document.addEventListener('DOMContentLoaded', function () {
  const dynamicTextElement = document.getElementById('dynamicText');
  const refreshButton = document.getElementById('refreshButton');

  refreshButton.addEventListener('click', function () {
      fetchDataAndUpdateText();
  });

  function fetchDataAndUpdateText() {
      // Use the Fetch API to get data from your server
      fetch('your_server_endpoint')
          .then(response => response.json())
          .then(data => {
              // Update the text with the fetched data
              dynamicTextElement.textContent = data.updatedText;
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }
});
