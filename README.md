# _Pizza Maker_

#### _A webpage which allows you to create a pizza, add toppings, and out put a price, April 6, 2018_

#### _Kelsey Guerra_

## Description

A webpage which allows you to create a pizza, add toppings, and output a price for your order

## Specifications

|Program Behavior|Input |Output|
|----------------|------|------|
|Receives order and creates standardized plain pizza.|orderPizza()|[ { size: "medium", toppings: ["pepperoni"] } ]|
|Receives size with order and creates pizza of matching size.|orderPizza( "small" )|[ { size: "small", toppings: ["pepperoni"] } ]|
|Receives 1 topping with order and creates matching pizza.|orderPizza( "medium", ["pepperoni"] )|[ { size: "medium", toppings: ["pepperoni"] } ]|
|Receives 2 toppings with order and create matching pizza.|orderPizza( "large", ["pepperoni", "pineapple"] )|[ { size: "large", toppings: ["pepperoni", "pineapple"] } ]|
|Receives 2 pizza orders and creates both pizzas.|orderPizza( "small", ["cheese"] ), orderPizza( "medium", ["pepperoni"] )|[ { size: "small", toppings: ["cheese"] }, { size: "medium", toppings: ["pepperoni"] } ]|
|Calculates and retains price of existing pizza order.|pizzaOrder.price()|[ { size: "small", toppings: ["cheese"], price: 8} ]|

## Setup/Installation Requirements

1. Visit https://github.com/kelseyguerra/Pizza-Maker.git
2. Clone repository

## Known Bugs

None at the moment.

## Support and Contact

Please Contact: Kelseylguerra@gmail.com

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

_MIT_

Copyright (c) 2018 **Kelsey Guerra**
