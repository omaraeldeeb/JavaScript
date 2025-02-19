'use strict';
/*

const bookings = [];

const creatBooking = function (flightNum, numPassengers = 1, price = 299) {
  // numPassengers = numPassengers || 1;
  // price = price || 299;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 2, 598);



const flight = 'LH1256';
const omar = {
  name: 'Omar Abdelhamid',
  passport: 5645648878,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH9999';
  passenger.name = 'Mr. ' + passenger.name;

  if ((passenger.passport = 5645648878)) alert('Checked in');
  else alert('Wrong passport!');
};

checkIn(flight, omar);

console.log(flight);
console.log(omar);

const newPassport = function (oerson) {
  person.passport = math.random() * 1000000000;
};

newPassport(omar);
checkIn(flight, omar);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transormed String: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer('JavasScript is okay!', upperFirstWord);
transformer('JavasScript is okay!', oneWord);

const great = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greaterHello = great('Hello');
greaterHello('Omar');
greaterHello('Amr');

great('Hey')('Omar');


const egyptair = {
  airline: 'EgyptAir',
  iataCode: 'EA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

egyptair.book(852, 'Omar Abdelhamid');
egyptair.book(852, 'Amr Helmi');
console.log(egyptair);
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
