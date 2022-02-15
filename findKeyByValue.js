const findKeyByValue = (myObject, myValue) => {
  for (const [currentObjectKey, currentObjectValue] of Object.entries(
    myObject
  )) {
    // scan the value from the Objects
    if (myValue === currentObjectValue) {
      return currentObjectKey;
    }
    // once it finds the value in the object
    // find the key and return it
  }
};

module.exports = findKeyByValue;
