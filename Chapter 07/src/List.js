import { List } from "immutable";

const books = List([
  { title: "JavaScript Allongé" },
  { title: "You Don't Know JS" }
]);

//Add
const aNewBook = { title: "Mastering Immutable.js" };
const newBooks = books.push(aNewBook);

console.log(Array.from(books));
//[{ title: "JavaScript Allongé" },
// { title: "You Don't Know JS" }]

console.log(Array.from(newBooks));
//[{ title: "JavaScript Allongé" },
//{ title: "You Don't Know JS" },
//{ title: "Mastering Immutable.js" }]

//Edit
//const aNewBook = { title: "Mastering Immutable.js" };
const newBooks2 = books.set(0, aNewBook);
console.log(Array.from(newBooks2));
//[{ title: "Mastering Immutable.js" },
// { title: "You Don't Know JS" }];

//Remove
const newBooks3 = books.remove(0);
console.log(Array.from(newBooks3));
//[{title: "You Don't Know JS"}];
