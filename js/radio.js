function submitForm() {
  var userInput = document.getElementById('user_input').value;

  // Use AJAX to send the input to the CGI script
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/cgi-bin/process_data.cgi', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Display the response on the webpage
          document.getElementById('output').innerHTML = xhr.responseText;
      }
  };

  // Send the user input to the CGI script
  xhr.send('user_input=' + encodeURIComponent(userInput));
}
