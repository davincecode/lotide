const letterPositions = function (sentence) {
  const result = {};
  let str = sentence.split(" ").join("");

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (!result[currentChar]) {
      result[currentChar] = [i];
    } else {
      result[currentChar].push(i);
    }
  }
  console.log(result);

  return result;
};

module.exports = letterPositions;
