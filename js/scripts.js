//Business Logic
function PizzaOrder(pizzaSize, toppings, quantity, caseus){
  this.pizzaSize = pizzaSize;
  this.pizzaOrder = [];
  this.quantity = parseInt(quantity);
  this.toppings = toppings;
};

PizzaOrder.prototype.pizzaPrices = function(){
   var caseus = 10;
  if (this.toppings === 12) {
      caseus += 12;
  }else if (this.toppings === 11) {
      caseus += 11;
  }else if (this.toppings === 10) {
      caseus += 10;
  }else if (this.toppings === 9) {
      caseus += 9;
  }else if (this.toppings === 8) {
      caseus += 8;
  }else if (this.toppings === 7) {
      caseus += 7;
  }else if (this.toppings === 6) {
      caseus += 6;
  }else if (this.toppings === 5) {
      caseus += 5;
  }else if (this.toppings === 4) {
      caseus += 4;
  }else if (this.toppings === 3) {
      caseus += 3;
  }else if (this.toppings === 2) {
      caseus += 2;
  }else if (this.toppings === 1) {
      caseus += 1;
  }else if (this.toppings === 0) {
    caseus = caseus;
  }
  this.pizzaOrder.push(caseus);
  console.log(this.pizzaOrder);
}

//UI Logic
$(document).ready(function() {
  $("form#pizzaOrderForm").submit(function(event){
    event.preventDefault();
    var pizzaSizeIn = $("#pizzaSize").val();

    var totalToppingsIn = $('#toppings :checkbox:checked').map(function(){
    return parseInt(this.value);
    }).get().reduce(function(addTop, addAnother) {
    return addTop + addAnother;
    }, 0);

    var inputtedQuantity = $("#quantity").val();
    myPizzaOrder = new PizzaOrder(pizzaSizeIn);
    alert(inputtedQuantity);
    $("#YourOrder").text("Please confirm your order:" + "$" + myPizzaOrder);
  });
});
