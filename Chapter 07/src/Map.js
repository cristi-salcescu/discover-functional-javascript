import { Map } from "immutable";

const book = Map({
  title: "The Square and the Tower",
  author: "Niall Ferguson"
});

//Add
const description = "Networks and Hierarchies";
const bookWithDesc = book.set("description", description);
console.log(bookWithDesc.toObject());
//{title:"The Square and the Tower",author:"Niall Ferguson",description:"Networks and Hierarchies"}

//Edit
const title = "Civilization";
const newBook = book.set("title", title);

console.log(book.toObject());
//{title: "The Square and the Tower", author: "Niall Ferguson"}

console.log(newBook.toObject());
//{title: "Civilization", author: "Niall Ferguson"}

//Remove
const newBook2 = book.remove("author");
console.log(newBook2.toObject());
//{title: "The Square and the Tower"}
