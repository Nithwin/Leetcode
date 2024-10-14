var sum = function(num){
  let sum = 0;
  while(num){
    sum += num%10;
    num = Math.floor(num/10);
  }
  return sum;
}

var minElement = function(nums) {
  let min = Infinity;
  for(i of nums){
    min = Math.min(min,sum(i));
  }
  return min;
};


console.log(minElement([10,12,13,14]));
