$(document).ready(function(){
    
var rappers = ["Sugar Hill Gang","Drake", "Slick Rick", "Lauryn Hill", "Jay-Z", "Nas", "Lizzo", "Missy Elliot", "Jidenna", "Childish Gambino", "J. Cole", "Outkast", "Mos Def", "The Roots", "Common"];
var  still = "";
var  animate ="";
var  state = "";
var dataStill = "";

function getButtons() {

  $(".buttons").empty();

  for (var i = 0; i < rappers.length; i++) {
    var newButton = $("<button>");
        newButton.addClass("gifButn");
        newButton.attr("data-name", rappers[i]);
        newButton.text(rappers[i]);
        $(".buttons").append(newButton);
  }
}


getButtons();

  $(".buttons").on("click", ".gifButn", function() {
  var search = $(this).attr("data-name");
7
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=L2oUAp0AqJ5LV9sRw8nN5HGNGRiSJ1SP&limit=10";
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
      var results = response.data;
     
     for (var i = 0; i < results.length; i++) {
       still = results[i].images.original_still.url;
       animate = results[i].images.fixed_height.url;
       
      
        newDiv = $("<div>")
        newDiv.addClass("new")
        var rapGifs = $("<img>");
        var rating = results[i].rating;
        rapGifs.attr("Rating", rating);
        rapGifs.attr("src", still);
        dataStill = still;
        dataAnimate = animate;  
        rapGifs.attr("data-still", dataStill);
        rapGifs.attr("data-animate", dataAnimate);
        rapGifs.attr("data-state", "still");
        rapGifs.addClass("ajaxGifs");
        newDiv.prepend(rapGifs);
        newDiv.append("Rating: " + rating);
        $("#gifDiv").prepend(newDiv)
    
      }
    });     
  });

  $(".container").on("click", ".ajaxGifs" , function() {
   state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } if  (state === "animate") {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
    
    }
});

  getButtons();


  $("#formBtn").on("click", function(event) {
    event.preventDefault();
    var newRap = $("#addRap").val().trim();
    rappers.push(newRap);
    getButtons();
  });



});


      
 

// $(document).on("click", ".gifButton", call);
// getButtons();



