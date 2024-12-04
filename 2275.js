const bitAdd =  (arr) => {
  let add = arr[0]
  for(let i = 1;i<arr.length;i++){
    add &= arr[i];
  }
  return add;
}

var largestCombination = function(candidates) {
  let max = 1;
  console.log(candidates.length);
  let sum = candidates[0]
  for(let j = 0;j < candidates.length; j++){
    let arr = candidates.slice(0,j+1);
    console.log(arr);
    for(let i = 1;i < arr.length ;i++){
      if((sum & arr[i]) > 0){
        console.log(arr[i]);
        sum &= arr[i];
        max++;
      }
    }
  }
  return max;
};

//console.log(largestCombination(  [16,17,71,62,12,24,14])); // 4   ---->  16 & 17 & 62 & 24
//console.log(largestCombination( [8,8])); // 2   ------> 8 & 8
console.log(largestCombination( [84,40,66,44,91,90,1,14,73,51,47,35,18,46,18,65,55,18,16,45,43,58,90,92,91,43,44,76,85,72,24,89,60,94,81,90,86,79,84,41,41,28,44])); // 28   ------> 8 & 8

console.log(bitAdd([16,17,62,24]));
