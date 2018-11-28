//Empty object, add values to it
var newPizza= {};

newPizza["name"]= "The Jordan";
newPizza["price"]= 999.99;
newPizza["toppings"]= [
  "Pineapple",
  "Balut",
  "Gold",
  "Chicken",
  "The Unknown",
  "Kimchi"
  ];
  
//Output a random topping to the screen
var random= (Math.floor(Math.random()*newPizza.toppings.length));
window.alert(newPizza.toppings[random]);