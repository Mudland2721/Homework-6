$( document ).ready(function() {
  console.log( "ready!" );

  function appendData(response) {
    var getCity = response.city.name
    var temp = response.list[0].main.temp
    var humidity = response.list[0].main.humidity
    var forecast = response.list[0].weather[0].main
    console.log(getCity)
    console.log(temp)
    console.log(humidity)
    console.log(forecast)

    //hot tip maybe move the appendData fun out of ajax just the call 

    // $("#mainCity").css("font-size", "larger")
    document.getElementById('mainCity').style.fontSize = 'large';
    $(".display-4").replaceWith(getCity).text
    $("#Temp").replaceWith(temp).text
    $("#humidity").replaceWith(humidity).text
    $("#forecast").replaceWith(forecast).text



 }
 //end append data function
  

//search button 
$('button').on('click', function (event){
  event.preventDefault()
  // save to local storage
  // var saveCity = localStorage.setItem(keyname, value)
  // append
  var city = $('input').val();
  // console.log(city) 
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=14953bc813c991ed3bfed89ef9581de7"

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