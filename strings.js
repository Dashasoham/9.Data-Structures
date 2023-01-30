'use strict';
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

console.log('----PRACTICE-----');

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log(`MIDDLE SEAT`)
    : console.log(`AISLE OR WINDOW`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3B');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//CHANGE CAPITALIZATION ON A PASSENGER NAME

// const passenger = 'jOnaS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);
// const passenger2 = 'name';

const nameOnTheTicket = function (passengerCorrect) {
  const passengerLower = passengerCorrect.toLowerCase();
  passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

nameOnTheTicket('linda');
nameOnTheTicket('PETER');

//Comparing Email

const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);

console.log(email === normalEmail);

//REPLACING

const priceGB = '288,97£';
const priceUs = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUs);

const announce = 'All passengers come to door 23. Boarding door 23!';

console.log(announce.replace('door', 'gate'));
console.log(announce.replace(/door/g, 'gate'));

//Booleans

const plane1 = 'Air320neo';
console.log(plane1.includes('Boeing'));
console.log(plane1.includes('Air'));

console.log(plane1.startsWith('Air'));

if (plane1.startsWith('Air') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}
//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun');

console.log('---STRINGS PART3----');

console.log('a+very+nice+string'.split('+'));
console.log('Daria Surname'.split(' '));

const [firstName, lastName] = 'Daria Surname'.split(' ');

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas test');

//Padding

const message = 'Go to gate 23';

console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4729303839230));
console.log(maskCreditCard('74894204293274'));

//Repeat
const message2 = 'Bad weather...All depatures delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);

*/
