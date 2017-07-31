$(document).ready(function () {

  $('#submitWeather').on('click', function() {

    var city = $('#city').val();

    if(city != '') {

      $.ajax({

        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=1236d6a559a0489eb4c6b1277de90fce",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          var cityTitle = cityName(data);
          var widget = showCity(data);

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
