// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
      var isDevoured = $(this).data("devoured");
  
      var devouredState = {
        devoured: true
      };
      console.log(devouredState);
      
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed isDevoured to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  