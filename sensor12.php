<!DOCTYPE html>
<html lang="en" class="nojs">
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
        </ul>
      </nav>
    </header>
    <div class="grid-container">
      <div class="header">
        <h2>Sensor 12</h2>
      </div>
  
      <div class="left">Inputs        
        <form>
          <input type="text" placeholder="Distance" />
          <button>Enter</button>
        </form>
        <form>
          <input type="text" placeholder="Power" />
          <button>Enter</button>
        </form>
        <button class="button">Get Image</button>
      </div>
      <div class="middle">Image</div>  
      <div class="right">
        <p id="temperature1">Temperature</p>
        <p id="battery1">Battery</p>
        <p id="cameraStatus1">Initial Text</p>
        <div class="button" id="button1" onclick="sendMessage('Refresh 1')">
          <p>Button</p>
        </div>
      </div>

    </div>  
  </body>