
<!DOCTYPE html>
<html>
  <head>
    <title>Weather Wizard</title>
    <link href="https://fonts.googleapis.com/css?family=Amaranth:400,700|Francois+One" rel="stylesheet">
    <link rel="stylesheet" href="sass/app.min.css">
  </head>
  <body>
    <?php require ("includes/header.php"); ?>
      <section class="currentWeather">

        <div id="city-title"></div>

        <div class="buttons-container">
          <div id="error"></div>
          <input type="text" name="city" id="city" placeholder="Enter City Name">
          <button type="button" name="button" id="submitWeather">Search City</button>
        </div>

        <div class="show-container">
          <div id="show"></div>
        </div>

      </section>

      <section class="forecastWeather">

        <div class="ajax-container">
          <input type="text" name="cityCall" id="cityCall" placeholder="Enter City Name">
          <button type="button" name="button" id="btnAjaxCall">Get Forecast</button>
        </div>

        <div class="showforecast-container">
          <div class="display-city"></div>
          <div class="display-data"></div>
        </div>

      </section>

    <?php require ("includes/footer.php"); ?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" charset="utf-8"></script>
    <script src="js/scripts.js" charset="utf-8"></script>
  </body>
</html>
