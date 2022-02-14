const assertEqual = require("./assertEqual");
const _ = require("lodash");

const without = (arr1, arr2) => {
  const result = _.without(arr1, ...arr2);
  console.log(typeof result, typeof arr1);
  return result;
};

assertEqual(without([1, 2, 3], [3]), [1, 2]);
