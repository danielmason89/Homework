let pizzaPlace = "Dominos";
let numberOfToppings = 12;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
console.log(`The pizza from ${pizzaPlace} is good though you're better off with getting just ${numberOfToppings} toppings.`);

if (numberOfToppings <= 10) {
    console.log("Quality, not quantity")
};
if (numberOfToppings >= 10) {
    console.log("A whole lot of pizza")
};

for (let numberOfToppings = 1; numberOfToppings <= 10; numberOfToppings++) {
    console.log(`The House of Pizza string 8 number At The House of Pizza, we have 8 toppings. Quality, not quantity.`)
};