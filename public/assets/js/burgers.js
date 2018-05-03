$(document).ready(function(){

  $(".devour-button").on("click", function(event) {
    event.preventDefault()
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");
    var newEatenState = {
      devoured: eaten
    };
    console.log(newEatenState)
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function(){
      location.reload();
    })
  })
    
    $("#submit-button").on("click", function(event){
      event.preventDefault()
      var newBurger = {
        burger_name:  $("#burger-input").val().trim()
      }
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function(){
        location.reload();
      })
    })

});


