//Backend Logic
function Pizza(size){
  this.size = size;
  this.toppings = toppings;
  }

pizza.prototype.totalPrice = function() {
  return this.size + (3 * this.toppings.length);
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
