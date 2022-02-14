const assertEqual = require("./assertEqual");

// const tail = (array) => {
//   let newArray = array.slice(-1);
//   return newArray;
// };

const _ = require("lodash");

const tail = (arr) => {
  return _.last(arr);
};

console.log(assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs"));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
