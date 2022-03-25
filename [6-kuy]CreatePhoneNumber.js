// Best Practices
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

// My variant
function createPhoneNumber(numbers) {
  numbers.splice(6, 0, "-");
  numbers.splice(3, 0, ") ");
  numbers.splice(0, 0, "(");
  return numbers.join("");
}

console.log("createPhoneNumber", createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
