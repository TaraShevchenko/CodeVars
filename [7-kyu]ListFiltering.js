// Return a new array with the strings filtered out
const filter_list = l => l.filter(el => typeof el === "number");

console.log("", filter_list([1,2,'a','b', 14, "taras"]));
