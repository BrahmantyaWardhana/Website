// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// display sensor data function
function getData() {
  const sensorId = document.getElementById('sensorId').value;

  // Make an asynchronous POST request to the server
  fetch('/getData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `sensorId=${sensorId}`,
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML = `<p>ID: ${data.id}</p><p>Name: ${data.name}</p><p>Age: ${data.age}</p>`;
  })
  .catch(error => console.error('Error:', error));
}