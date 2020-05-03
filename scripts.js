$( document ).ready(function() {
  console.log( "ready!" );


  

//search button 
$('button').on('click', function (event){
  event.preventDefault()
  // save to local storage
  // var saveCity = localStorage.setItem(keyname, value)
  // append
  var city = $('input').val();
  console.log(city) 
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=14953bc813c991ed3bfed89ef9581de7"

//api call 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    //clear search field 
    function clearSearch () {
     document.getElementById('searchBar').value = " ";
  }
    clearSearch()
  })
  
})













  
}); 