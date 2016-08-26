//Business Logic
function Pizza(size, toppings, quantity){
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
};

Pizza.prototype.pizzaPrices = function(){
  var pizzaPrice = this.toppings += this.size;
  return pizzaPrice;
}
Pizza.prototype.pizzaPrices = function() {
    var pizzaPrices = 10;
  if(myPizza.toppings === "12") {
      pizzaPrices += 12;
  }else if
    (myPizza.toppings === "11") {
      pizzaPrices += 11;
  }else if
    (myPizza.toppings === "10") {
      pizzaPrices += 10;
  }else if
    (myPizza.toppings === "9") {
      pizzaPrices += 9;
  }else if
     (myPizza.toppings === "8") {
      pizzaPrices += 8;
  }else if
    (myPizza.toppings === "7") {
      pizzaPrices += 7;
  }else if
     (myPizza.toppings === "6") {
      pizzaPrices += 6;
  }else if
     (myPizza.toppings === "5") {
      pizzaPrices += 5;
  }else if
     (myPizza.toppings === "4") {
      pizzaPrices += 4;
  }else if
  (myPizza.toppings === "3") {
      pizzaPrices += 3;
  }else if
  (myPizza.toppings === "2") {
      pizzaPrices += 2;
  }else if
  (myPizza.toppings === "1") {
      pizzaPrices += 1;
  }else if
  (myPizza.toppings === "0") {
        pizzaPrices.toppings = pizzaPrices;

  };
    return pizzaPrices;
};
Pizza.prototype.pizzaSize = function(){
  var pizzaSize = 10;
  if (this.size = "small"){
    pizzaSize = 10;
  }else
    if (this.size = "medium"){
      pizzaSize = 15;
    }else
      if (this.size = "large"){
        pizzaSize = 20;
      };
      return pizzaSize;
    };

//UI Logic
$(document).ready(function() {
  $("#pizzaOrderForm").submit(function(event){
    event.preventDefault();
    var pizzaSizeIn = $("#pizzaSize").val();
    var totalToppingsIn = $('#toppings :checkbox:checked').map(function(){
    return parseInt(this.value);
    }).get().reduce(function(addTop, addAnother) {
    return addTop + addAnother;
    }, 0);
    var selectedToppings = totalToppingsIn.toString(); //topping ints to strings

    var quantityIn = $("#quantity").val();

    var myPizza = new Pizza(pizzaSizeIn,selectedToppings,quantityIn);
    console.log(myPizza);

    $("#yourOrder").append("<li>" + "Your chosen "+myPizza.size +" pizza "+" <br>"+ " costs: " + "$" + myPizza.toppings + "</li>");
  });
});
