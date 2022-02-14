const findMedian = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(findMedian([1]), []); // => []
assertArraysEqual(findMedian([1, 2]), []); // => []

assertArraysEqual(findMedian([1, 2, 3]), [2]); // => [2]
assertArraysEqual(findMedian([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(findMedian([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(findMedian([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
