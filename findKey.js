const findKey = (obj, callback) => {
  let result = [];

  for (const item in obj) {
    if (callback(obj[item])) {
      result = item;
      console.log(result);
      return result;
    }
  }
  return result;
};

module.exports = findKey;
