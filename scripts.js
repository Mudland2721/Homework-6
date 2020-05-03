$(document).ready(function () {
  var place = $("input").val();
  console.log($("input").val());

  function searchWeather() {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/forecast?q=Utah&appid=14953bc813c991ed3bfed89ef9581de7",
      method: "GET",
    }).then(function (response) {});
    // console.log(response);
  }
  searchWeather();
});
