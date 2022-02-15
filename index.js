const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");

module.exports = {
  head,
  tail,
  middle, // a comma won't throw an error since it's a new feature in ES6.
};

//refactored to Object property value shortHand
