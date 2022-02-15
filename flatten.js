const _ = require("lodash");

const flatten = (arr) => {
  const flat = _.flattenDeep(arr);
  return flat;
};

module.exports = flatten;
