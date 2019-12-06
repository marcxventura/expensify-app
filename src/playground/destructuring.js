//
// Object destructuring
//

// const person = {
//   name: "Marc",
//   age: 36,
//   location: {
//     city: "Los Angeles",
//     temp: 51
//   }
// };

// const { name = "Anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [street, city, state, zip] = address;

// Skip first item and give default value to state
// const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice] = item;

//grab first and third items using array destructuring
// console.log(`A medium ${itemName} costs ${mediumPrice}`);
