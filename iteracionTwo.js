
/* 1.1 */

let character = {name: 'Jack Sparrow', age: 10};

character.age=25;
console.log(character)


/* 1.2 */

let firstName= 'Jon';
let lastName= 'Snow';
let age = 24;

/* console.log('Soy ' + (firstName) + ' ' + (lastName) + ' ' + 'y tengo ' + (age) + ' años y me gustan los lobos') */

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`)



/* 1.3 suma precio ambos juguete */

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(`Tota Price: ${toy1.price + toy2.price}`); 


/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.  */

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; 

let globalBasePrice = 10000;
globalBasePrice = 25000;

finalPriceCar1= car1.basePrice + globalBasePrice;
console.log(`Final Price Car 1: ${finalPriceCar1}`)

finalPriceCar2= car2.basePrice + globalBasePrice;
console.log(`Final Price Car 2: ${finalPriceCar2}`)











