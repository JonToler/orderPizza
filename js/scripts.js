//Business Logic
function pizzaOrder(){

}

//UI Logic
$(document).ready(function() {
  $("form#pizzaOrderForm").submit(function(event){
    event.preventDefault();
    var pizzaSizeIn = $("#pizzaSize").val();
    alert(pizzaSizeIn);

    myPizzaOrder = new pizzaOrder(pizzaSizeIn);
    $("#YourOrder").text("Please confirm your order:" + "$" + myPizzaOrder);
  });
});
