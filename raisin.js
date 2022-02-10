// const raisinAlarm = function(cookie) {
//   let result = "All good!";
//   for (let element of cookie) {
//     if (element === "🍇") {
//       result = "Raisin Alert!";
//     }
//   }
//   return result;
// };


// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  let result = [];

  for (let element of cookies) {

    if (element.includes("🍇")) {
      result.push("raisin Alert");

    } else {
      result.push("All Good!");
    }
  }

  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"], //raisin
    ["🍫", "🍇", "🍫", "🍫", "🍇"], //raisin
    ["🍫", "🍫", "🍫"] // allgood
  ]
));