$(document).ready(function(){
    
var rappers = ["Sugar Hill Gang","Drake", "Slick Rick", "Lauryn Hill", "Jay-Z", "Nas", "Lizzo", "Missy Elliot", "Jidenna", "Childish Gambino", "J. Cole", "The Game", "Lupe Fisasco", "The Roots",];
var  still = "";
var  animate ="";
var  state = "";

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
        rapGifs.attr("src", animate);
        rapGifs.attr ("data-state", "animate")
        rapGifs.addClass("ajaxGifs");
        newDiv.prepend(rapGifs);
        newDiv.prepend("Rating: " + rating);
        $("#gifDiv").prepend(newDiv)
           console.log("still = " +still)
    
      }
    });     
  });

  $(".new").on("click", function() {
    alert("Gif was clicked")
  state = $(this).attr("data-state");
  if (state === "animate") {
    $(this).attr("src", $(this).attr(still));
    $(this).attr("data-state", "still");
  } else {
    $(this).attr("src", $(this).attr(animate));
    $(this).attr("data-state", "animate");
    
    }
});

  getButtons();


  $("#formBtn").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var newRap = $("#addRap").val().trim();

    // Adding movie from the textbox to our array
    rappers.push(newRap);

    // Calling renderButtons which handles the processing of our movie array
    getButtons();
  });
});


      
 

// $(document).on("click", ".gifButton", call);
// getButtons();



