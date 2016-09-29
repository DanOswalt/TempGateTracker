<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/normalize.css" charset="utf-8">
    <link rel="stylesheet" href="/css/skeleton.css" charset="utf-8">
    <link rel="stylesheet" href="/css/trackerstyle.css" charset="utf-8">
    <title>Watzek Gatetracker</title>
  </head>
  <body>
    <div class='container'><!--for skeleton grid, if it gets used-->
      <header>
        <img src="img/watz-owl.png" alt="" class="watz-owl"/>
        <h1 id="title">Watzek Gatetracker</h1>
        <h5 id="date-display"></h5>
      </header>
      <div id="user-msg-box">
        <h6 id="user-msg"></h6>
      </div>
      <div id="counter-form-container">
        <form id="counter-form" action="index.php" method="post">
          <input type="text" name="gate-count" placeholder="enter today's gate count">
          <button id="submit-btn" class="button-primary" type="submit" name="button">Send!</button>
        </form>
      </div>
    </div>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="js/app.js">

  </script>
</html>
