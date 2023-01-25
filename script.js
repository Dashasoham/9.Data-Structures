'use strict';

/*
// // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here´s your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// //1)DESTRUCTURING
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2)FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'corn', 'olives', 'spinach');
// restaurant.orderPizza('corn');

// // const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[2], arr[2]];
// console.log(badNewArray);

// const goodNewArray = [1, 2, ...arr];
// console.log(goodNewArray);

// console.log(...goodNewArray);
// console.log(...restaurant.mainMenu);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //COPY ARRAY

// const mainMenuCopy = [...restaurant.mainMenu];

// //JOIN 2 ARRAYS
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//Iterables
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(str[2]);

// Real world example
// const ingridients = [
//   prompt(`Let´s make pasta! Ingredient 1?`),
//   prompt(`Let´s make pasta! Ingredient 2`),
//   prompt(`Let´s make pasta! Ingredient 3?`),
// ];
// console.log(ingridients);

// restaurant.orderPasta(...ingridients);

// //OBJECTS

// const newRestaurant = { ...restaurant, founder: 'Giuseppe', foundedIn: 1998 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// DESTRUCTURING OBJECTS

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via da Catarina 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via da Catarina 21',
//   starterIndex: 3,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //DEFAULT VALUES
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //MUTATING VARIABLES
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //NESTED OBJECTS

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
// console.log(restaurant.order(2, 0));
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// //NESTED DESTRUCTURING
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //DEFAULT VALUES
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

console.log('-------OR--------');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------AND--------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

console.log('----The Nullish Coalescing Operator------');

restaurant.numGuests = 0;

const guests3 = restaurant.numGuests || 10;
console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

*/
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 ENHANCED OBJECT LITERALS
  openingHours,
  //NO NEED TO MENTION FUNCTION
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here´s your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
console.log(restaurant);

const rest1 = {
  name: 'Capri',
  //   numGuests: 20,

  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};
// "OR" Assignment Operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//Nullish Assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && `<ANONYMOUS>`;

rest1.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

for (let rep = 1; rep < 1; rep++) {
  console.log([...menu]);
}

console.log('-----The FOR-OF Loop-----');
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}:${el}`);

console.log('------');
// for (const item of restaurant.categories) console.log(item);

// console.log(...menu.entries());
