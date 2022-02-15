const findKeyByValue = (myObject, myValue) => {
  for (const [currentObjectKey, currentObjectValue] of Object.entries(
    myObject
  )) {
    if (myValue === currentObjectValue) {
      return currentObjectKey;
    }
  }
};

module.exports = findKeyByValue;
