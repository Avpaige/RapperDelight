$(document).ready(function(){
    
var rappers = ["Sugar Hill Gang","Drake", "Slick Rick", "Lauryn Hill", "Jay-Z", "Nas", "Lizzo", "Missy Elliot", "Jidenna", "Childish Gambino", "J. Cole", "The Game", "Lupe Fisasco", "The Roots",];

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

  $(this).on("click", function() {
  var search = $(this).attr("data-name");
  console.log(this)
  console.log(search)
  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=L2oUAp0AqJ5LV9sRw8nN5HGNGRiSJ1SP&limit=10";
  console.log(queryURL  + " is the url")

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
      var results = response.data;
      // var rating = results.rating;
     for (var i = 0; i < results.length; i++) {
        var rapGifs = $("<img>");
        // rapGifs.attr("Rating", rating);
        rapGifs.attr("src", results[i].images.fixed_height.url)
        rapGifs.addClass("ajaxGifs")
        $("#gifDiv").prepend(rapGifs);
        console.log(results)
        // console.log(rapGifs)
        // + "Rating: " + rating
      }
    });     
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


      // for ( var i =0; i< results.length; ii++){
    
      //     var p = $("<p>").text("Rating: " + rating);
      //     $(".gifs").append(results);
      //     $(".gifs").prepend(p);
      //     }





// $("#formBtn").on("click"), function(evt){
//   evt.preventDefault();
//   var added = $("#addRap").val().trim();
//   rappers.push(added);
  
//  
// }





 

// $(document).on("click", ".gifButton", call);
// getButtons();



// loop through buttons to create dynamic buttons based on giphs
//clear div before button is pressed
//add new buttons based on search bar
//do ajax call when button is clicked
//pause/play gifs