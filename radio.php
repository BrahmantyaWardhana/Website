<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <nav class="navigation">
        <ul class="navbuttons">
          <li><a href="index.php">Home</a></li>
          <li><a href="drone.php">Drone Control</a></li>
          <li><a id="refreshButton" onclick="">Refresh</a></li>
        </ul>
      </nav>
    </header>
    <form id="inputForm">
        Enter Value: <input type="text" id="user_input" name="user_input">
        <input type="button" value="Submit" onclick="submitForm()">
    </form>
    <script src="js/radio.js"></script>
  </body>
</html>
