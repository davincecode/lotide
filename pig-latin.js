const pigLatin = (str) => {
  return str
    .split(" ")
    .map((item) => item.substring(0, 1).substring(1) + item.substring(1) + item.substring(0, 1) + "ay")
    .join(" ");
};
console.log(pigLatin("pig latin"));
