const assertEqual = require("./assertEqual");

const _ = require("lodash");

const head = (arr) => {
  return _.first(arr);
};
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
