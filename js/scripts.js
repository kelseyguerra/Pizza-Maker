//Business Logic//

function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}

PizzaOrder.prototype.calcPrice = function() {
  var pizzaCost = 22;
  if (this.size === "large") {
    pizzaCost += 18;
  } else if (this.size === "medium") {
    pizzaCost += 12;
  }
  if (this.toppings.length > 2) {
    pizzaCost += 2.0 * (this.toppings.length - 2);
  }
  this.price = pizzaCost;
}
