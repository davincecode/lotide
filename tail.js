const assertEqual = require("./assertEqual");

const _ = require("lodash");

const tail = (arr) => {
  return _.last(arr);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
