function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.value = [];
}

Pizza.prototype.price = function(value) {
if (value <= 10) {
  price = 15;
 }
 if ((value > 10) && (value <= 15)) {
   price = 20;
  }
  if (value > 15) {
    price = 25;
   }
 return price;
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

// 6. code to capture vale of radio selected:
var radios = document.getElementsByTagName("input");

for(var i = 0; i < radios.length; i++){
    if(radios[i].type == "radio"){
       radios[i].onclick = function(){
           alert(getCheckedValues());
       }
    }
}
function getCheckedValues(){
    var values = [];
    for(var x = 0, sum = 0; x < radios.length; x++){
        if(radios[x].type == "radio" && radios[x].checked){
           values.push(radios[x].value);
        }
    }
//find how to parsInt incomming values
//this code will add the values:
for (var i = 0, sum = 0; i < values.length; sum += values[i++])
    ;

    // return values;
    return sum;
}
console.log(getCheckedValues());


// 7. create a location in Pizza constructor to push value to then push selectedValue to that
// ie. newGame.currentPlayer.spaces.push(spaceId);
  // newPizza.value.push(getCheckedValues());
  console.log(newPizza.value);
// 8. call price method
      var price = newPizza.price();

//9. create text to alert if size not selected
    // if (pizzaSize === "" || pizzaTopping === "") {
    //   return alert("Please make all selections");
    //   $(".show-price").hide();
    // }

//10. result to html
// $(".show-price").hide();
//   $(".show-price").show();
//   $("#showPizzaSize").text(" " + pizzaSize);
//   $("#pizzaPrice").text(" $" + price);


  });
});
