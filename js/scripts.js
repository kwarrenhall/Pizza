function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.value = [];
}


Pizza.prototype.price = function(userSelection) {
    var Values ="";
    var Total=0; // base value
    // var inp=document.getElementsByTagName("input")
    var inp = userSelection;
    for (var i=0, sum=0;i < inp.length; i++) {
      Values +=inp[i].name+" = " + inp[i].value+"\n"
      if (inp[i].checked) {
        Total+=parseInt(inp[i].value)
      }
      if (inp[i].checked) {
        Values+=(inp[i].name)
      }
    }
    return Total;
  }

  Pizza.prototype.Selections = function(userSelection) {
      var Values ="";
      var Total=0; // base value
      // var inp=document.getElementsByTagName("input")
      var inp = userSelection;
      for (var i=0; i < inp.length; i++) {
        // Values +=inp[i].name+" = " + inp[i].value+"\n"
        if (inp[i].checked) {
          // Values+=(inp[i].id)
          Values+=inp[i].id + " , ";
        }
      }
      return Values;
    }

// User Interface//
$(document).ready(function() {
  //1. change this form id to a div id wrapped around radio buttons
  $("form#pizza").submit(function(event) {
      event.preventDefault();
// 2. Collect user input
// 3. tag pizza size so it can be resulted-
      var pizzaSize = $("select#size").val();
// 4. tag toppings so they can be resulted, changed name from topping1 & 2 to toppings and ensure id is on radio-
      var pizzaToppings = $("select#toppings").val();

//5. create a newPizza object and pass value to it;
      var newPizza = new Pizza(pizzaSize);

// 6. code to capture value of radio selected:
    var userSelection = document.getElementsByTagName("input");

// 7. call price method
      var price = newPizza.price(userSelection);
      console.log(price);

      console.log(newPizza.Selections(userSelection));

//8. create text to alert if size not selected
    // if (pizzaSize === "" || pizzaTopping === "") {
    //   return alert("Please make all selections");
    //   $(".show-price").hide();
    // }

// 10. result to html
$(".show-price").hide();
  $(".show-price").show();
  $("#showPizzaSize").text(" " + pizzaSize);
  $("#pizzaPrice").text(" $" + price);

});
});
