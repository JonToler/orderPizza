// BUSINESS LOGIC
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.pizzaPrice = 0;
};
function CustomerInfo(name) {
  this.name = name;

};
Pizza.prototype.pizzaSizeToString = function() {
  var pizzaSize = "";
  if (this.size === 13) {
    pizzaSize = "Small Pizza"
  } else if (this.size === 18) {
    pizzaSize = "Medium Pizza"
  } else {
    pizzaSize = "Large Pizza"
  }
  return pizzaSize;
};
Pizza.prototype.totalCostOfPie = function() {
  var numberOfToppings = this.toppings.length;
  return this.pizzaPrice = (numberOfToppings * (this.size/10)) + this.size;
};
Pizza.prototype.totalOrderCost = function() {
  var total = 0;
  return this.pizzaPrice = (numberOfToppings * (this.size/10)) + this.size;
};
Pizza.prototype.listToppings = function() {
  var toppings = "";
  if (this.toppings[1] !== undefined){
    for (var i = 1; i < this.toppings.length; i++) {
      toppings+=(this.toppings[i] + ", ");
    }
  }
  if (this.toppings[0] !== undefined){
    toppings+=this.toppings[0];
  }
  return toppings;
};
// USER INTERFACE LOGIC
$(function() {
   var total = 0;
   $("form").submit(function(event) {
     event.preventDefault();
     var customersName = $("#customersName").val();

     var sizeOfPizza = parseInt($("#sizeOfPizza input[type='radio'][name='pizzaSize']:checked").val());
     var newPizza = new Pizza(sizeOfPizza);
     var newCustomerInfo = new CustomerInfo(customersName);
     $('#toppings :checked').each(function() {
        newPizza.toppings.push($(this).val());
      });

      total+=newPizza.totalCostOfPie();
      $(".customersName").text(newCustomerInfo.name);
      $("#totalPizzaOrder").append("<li>" + newPizza.pizzaSizeToString() + ": " + newPizza.listToppings() + " : $"+ newPizza.pizzaPrice +  "</li>");
      $("#checkout").show();
      $("#customerDetails").hide();
   });
   $("#placeOrder").click(function(){
    confirm("Your total is: $" + total + "Thanks for choosing Caligulia's");
   });
});
