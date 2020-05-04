$( document ).ready(function() {
  console.log( "ready!" );
  console.log("What did you're coworker say to you're pseudocode?")


  hideElements()
  //hide elements
  function hideElements(){
  $(".jumbotron").hide();
  $(".fiveDayForecast").hide();
  }
  //show elements
  function showElements() {
    $(".jumbotron").show();
    $(".fiveDayForecast").show();
  }

  

  function appendData(response) {
    var getCity = response.city.name
    var temp = response.list[0].main.temp
    var humidity = "Humidity:" + " " + response.list[0].main.humidity 
    var forecast = "Forecast:" + " " + response.list[0].weather[0].main
    var getTemp = Math.floor(((temp-273.15)*1.8)+32) + " " + "Degrees" + " " + "Fahrenheit"	

    console.log(getCity)
    console.log(temp)
    console.log(humidity)
    console.log(forecast)

    //hot tip maybe move the appendData fun out of ajax just the call 

    // $("#mainCity").css("font-size", "larger")
    // document.getElementById('mainCity').style.fontSize = 'large';

    $(".display-4").append(getCity).text
    $("#Temp").append(getTemp).text
    $("#humidity").append(humidity).text
    $("#forecast").append(forecast).text

    showElements()

 }
 //end append data function
  


//search button 
$('button').on('click', function (event){
  event.preventDefault()
  // save to local storage
  // var saveCity = localStorage.setItem(keyname, value)
  var city = $('input').val();
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=14953bc813c991ed3bfed89ef9581de7"


  console.log("What a crappy comment ;)")

//api call 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (res) {
    console.log(res)
    //clear search field 
    function clearSearch () {
     document.getElementById('searchBar').value = " ";
  }
    clearSearch()
    appendData(res)
    






  })
  
})









}); 