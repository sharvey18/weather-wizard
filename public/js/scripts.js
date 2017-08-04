$(document).ready(function () {

  // Show current & forecast weather on click
  $('#showCurrentWeather').on('click', function () {
    $('.currentWeather').toggleClass('toggleFlex');
  });

  $('#showForecastWeather').on('click', function () {
    $('.forecastWeather').toggleClass('toggleFlex');
  });

  var count = 0;

  $("#btnAjaxCall").click(function () {
    fetchDataAndDisplay();
  });

  function fetchDataAndDisplay() {

    var api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    var fiveDayCity = $('#cityCall').val();
    var apiKey = '&APPID=1236d6a559a0489eb4c6b1277de90fce';
    var units = '&units=imperial';
    var url = api + fiveDayCity + apiKey + units;

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(data) {
      var start = count > 0 ? 5 * count : count;
      var end = start + 5;
      var str = '';

      for (var i = start; i < end; i++) {
        str +=  '<div class="weather-details">' +
                'Temperature<span class="dataStyle"> ' + data.list[i].temp.day + '</span><br />' +
                'Temperature Min<span class="dataStyle"> ' + data.list[i].temp.min + '</span><br />' +
                'Temperature Max<span class="dataStyle"> ' + data.list[i].temp.max + '</span><br />' +
                'Humidity is<span class="dataStyle"> ' + data.list[i].humidity + '</span><br />' +
                'Wind is<span class="dataStyle"> ' + data.list[i].speed + '</span><br />' +
                '</div>';
      }

    if(end >= data.length) {
      count = 0;
      $(".display-data").empty();
      $(".display-data").append("List Traversed. Start Over!");
      return;
    }

    count++;
    $(".display-data").empty();
    $(".display-data").append(str);
    $('.display-city').empty();
    $('.display-city').append('<div class="weather-details">' + data.city.name + '</div>');

  });

  }

  // Get City Weather Current information
  $('#submitWeather').on('click', function() {

    var city = $('#city').val();

    if(city != '') {

      var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
      var city = city;
      var apiKey = '&APPID=1236d6a559a0489eb4c6b1277de90fce';
      var units = '&units=imperial';
      var url = api + city + apiKey + units;

      $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          var cityTitle = cityName(data);
          var widget = showCity(data)

          $('#show').html(widget);

          $('#city-title').html(cityTitle);

          $('#city').val('');

          $('#error').html("");

        }

      })

    } else {
      $('#error').html("Field cannot be empty");
    }

  });
});

function cityName(data) {
  return "<div class='city-title'>" + data.name + "<span class='country'><img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + data.sys.country + "</span></div>";
}

function showCity(data) {
  return "<div><span class='showCity-title'>Longitude:</span><span class='showCity-info'>" + data.coord.lon + "</span></div>" +
         "<div><span class='showCity-title'>Lagitude:</span><span class='showCity-info'>" + data.coord.lat + "</span></div>" +
         "<div><span class='showCity-title'>Weather:</span><span class='showCity-info'>" + data.weather[0].main + "</span></div>" +
         "<div><span class='showCity-title'>Description:</span><span class='showCity-info'>" + data.weather[0].description + "</span></div>" +
         "<div><span class='showCity-title'>Temperature:</span><span class='showCity-info'>" + data.main.temp + "<span class='showCity-icon'>&deg;F</span></span></div>" +
         "<div><span class='showCity-title'>Pressure:</span><span class='showCity-info'>" + data.main.pressure + "<span class='showCity-icon'>hPa</span></span></div>" +
         "<div><span class='showCity-title'>Humidity:</span><span class='showCity-info'>" + data.main.humidity + "<span class='showCity-icon'>%</span></span></div>" +
         "<div><span class='showCity-title'>Min. Temperature:</span><span class='showCity-info'>" + data.main.temp_min + "<span class='showCity-icon'>&deg;F</span></span></div>" +
         "<div><span class='showCity-title'>Max. Temperature:</span><span class='showCity-info'>" + data.main.temp_max + "<span class='showCity-icon'>&deg;F</span></span></div>" +
         "<div><span class='showCity-title'>Wind Speed:</span><span class='showCity-info'>" + data.wind.speed + "<span class='showCity-icon'>m/s</span></span></div>" +
         "<div><span class='showCity-title'>Wind Direction:</span><span class='showCity-info'>" + data.wind.deg + "<span class='showCity-icon'>&deg;</span></span></div>";
}
