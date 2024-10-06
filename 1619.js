var trimMean = function(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let a = arr.filter(i => (i!== max && i!==min));
  let len = a.length;
  a = a.reduce(((i,j) => i+j),0);

  return a/len;
};

console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]));//2
console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]));//4
