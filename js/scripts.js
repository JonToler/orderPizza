//Business Logic
function Pizza(size, toppings, quantity){
  this.size = size;
  this.toppings = toppings;
  this.quantity = parseInt(quantity);
};


  Pizza.prototype.pizzaPrices = function(){
    var pizzaPrices = 10;
  if (this.toppings === "12") {
      pizzaPrices += 12;
  }else if (this.toppings === "11") {
      pizzaPrices += 11;
  }else if (this.toppings === "10") {
      pizzaPrices += 10;
  }else if (this.toppings === "9") {
      pizzaPrices += 9;
  }else if (this.toppings === "8") {
      pizzaPrices += 8;
  }else if (this.toppings === "7") {
      pizzaPrices += 7;
  }else if (this.toppings === "6") {
      pizzaPrices += 6;
  }else if (this.toppings === "5") {
      pizzaPrices += 5;
  }else if (this.toppings === "4") {
      pizzaPrices += 4;
  }else if (this.toppings === "3") {
      pizzaPrices += 3;
  }else if (this.toppings === "2") {
      pizzaPrices += 2;
  }else if (this.toppings === "1") {
      pizzaPrices += 1;
  }else if (this.toppings === "0") {
        pizzaPrices = pizzaPrices;
  };
  return pizzaPrices;

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
    alert(selectedToppings);
    var quantityIn = $("#quantity").val();

    var myPizza = new Pizza(pizzaSizeIn,selectedToppings,quantityIn);
    console.log(myPizza);

    $("#yourOrder").append("<li>" + "Your chosen pizza costs:" + "$" + myPizza.pizzaPrices + "</li>");
  });
});
