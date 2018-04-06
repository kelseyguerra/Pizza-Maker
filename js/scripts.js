//Business Logic//

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  return parseInt(this.size) + parseInt(this.toppings) + 12;
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
    $("#output").text("Total amount: $" + newPizza.price() + ".00");
  });
});
