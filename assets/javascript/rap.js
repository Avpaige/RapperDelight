$(document).ready(function(){
    

var rappers = ["Drake", "Lauryn Hill", "Jay Z", "Nas", "Lizzo", "Missy Elliot", "Jidenna", "Childish Gambino", "J. Cole", "The Game", "Lupe Fisasco", "The Roots", "Chill Moody",];


function call (){

var rapper = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=L2oUAp0AqJ5LV9sRw8nN5HGNGRiSJ1SP&tag=" + rapper + "&limit:10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
  
    var results = response.data;
    var rating = results[i].rating;
  
    for ( var i =0; i< results.length; ii++){
   
        var p = $("<p>").text("Rating: " + rating);
        $(".gifs").append(results);
        $(".gifs").prepend(p);
        }
});

    function getButtons() {

  $(".buttons").empty();

  for (var i = 0; i < rappers.length; i++) {

    var newButton = $("<button>").addClass("gifButton")
    // .attr("data-name", rappers[i]).text(rappers[i]);
    
    $(".buttons").append(newButton);

  }
}

$("#formBtn").on("click"), function(evt){
  evt.preventDefault();
  var added = $("#addRap").val().trim();
  rappers.push(added);
  
  getButtons();
}

 


}

$(document).on("click", ".gifButton", call);
getButtons();



// loop through buttons to create dynamic buttons based on giphs
//clear div before button is pressed
//add new buttons based on search bar
//do ajax call when button is clicked
//pause/play gifs
