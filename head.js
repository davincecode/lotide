const assertEqual = require("./assertEqual");
const _ = require("lodash");

const head = (arr) => {
  return _.first(arr);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

module.exports = head;
