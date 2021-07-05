let pizzaPlace = "Dominos";
let numberOfToppings = 0;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
console.log(`The pizza from ${pizzaPlace} is good though you're better off with getting just ${numberOfToppings} toppings.`);

if (numberOfToppings <= 10) {
    console.log("Quality, not quantity")
};
if (numberOfToppings >= 10) {
    console.log("A whole lot of pizza")
};