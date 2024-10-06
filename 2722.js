const { log } = require("console");

var join = function(arr1, arr2) {
  return arr1.contact(arr2);
};

console.log(join(arr1 = [
  {"id": 1, "x": 1},
  {"id": 2, "x": 9}
],
arr2 = [
  {"id": 3, "x": 5}
]));

console.log(join(arr1 = [
  {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
],
arr2 = [
  {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]));
