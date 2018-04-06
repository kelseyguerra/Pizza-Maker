//Business Logic//

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  return parseInt(this.size) + parseInt(this.toppings) + 15;
}


//User- Interface Logic//

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#size").val();
    var inputToppings = 0;
    $("input:checkbox[name=toppings]:checked").each(function() {
       inputToppings += parseInt($(this).val());
    });
    var newPizza = new Pizza(inputSize, inputToppings);
    $("#output").text("The price of your order will be $" + newPizza.price() +".");
  });
});
