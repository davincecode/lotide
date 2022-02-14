const assertEqual = require("./assertEqual");

const _ = require("lodash");

const head = (arr) => {
  return _.first(arr);
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
