
<!DOCTYPE html>
<html>
  <head>
    <title>Weather Wizard</title>
    <link href="https://fonts.googleapis.com/css?family=Amaranth:400,700|Francois+One" rel="stylesheet">
    <link rel="stylesheet" href="sass/app.min.css">
  </head>
  <body>
    <?php require ("includes/header.php"); ?>

    <div id="city-title"></div>

    <!-- city weather -->
    <section>

      <div class="buttons-container">
        <div id="error"></div>
        <input type="text" name="city" id="city" placeholder="City Name">
        <button type="button" name="button" id="submitWeather">Search City</button>
      </div>

      <div class="show-container">
        <div id="show"></div>
      </div>

    </section>

    <?php require ("includes/footer.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" charset="utf-8"></script>
    <script src="js/scripts.js" charset="utf-8"></script>
  </body>
</html>
