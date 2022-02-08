const reverse = (str) => {
  let reversed = "";
  for (let letters of str) {
    reversed = letters + reversed;
  }
  return reversed;
};

console.log(reverse("Hello Goodbye"));
