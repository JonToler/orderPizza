//Business Logic
function pizzaOrder(pizzaSize, toppings, quantity){
  this.pizzaSize = pizzaSize;
  this.pizzaOrder = [];
  this.toppings = parseInt(toppings);
  this.quantity = parseInt(quantity);

}

pizzaOrder.prototype.prices = function () {
  var caseus = 10;
  if (toppings === 12) {
      caseus += 12;
  }else if (toppings === 11) {
      caseus += 11;
  }else if (toppings === 10) {
      caseus += 10;
  }else if (toppings === 9) {
      caseus += 9;
  }else if (toppings === 8) {
      caseus += 8;
  }else if (toppings === 7) {
      caseus += 7;
  }else if (toppings === 6) {
      caseus += 6;
  }else if (toppings === 5) {
      caseus += 5;
  }else if (toppings === 4) {
      caseus += 4;
  }else if (toppings === 3) {
      caseus += 3;
  }else if (toppings === 2) {
      caseus += 2;
  }else if (toppings === 1) {
      caseus += 1;
  }
  this.pizzaOrder.push(caseus);
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

      alert(totalToppingsIn);



    myPizzaOrder = new pizzaOrder(pizzaSizeIn);
    $("#YourOrder").text("Please confirm your order:" + "$" + myPizzaOrder);
  });
});
