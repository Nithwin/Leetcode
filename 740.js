var deleteAndEarn = function(nums, target = -1, memo = {}) {
  let str = nums.join('') + '-' + target;
  if(str in memo) return memo[str]
  if(nums.length == 1) return nums[0];
  let arr = [];
  let sum = 0
  for(let i of nums){
    if(i == target) sum += i;
    else if((target -1) !== i && (target + 1) !== i) arr.push(i);
  }
  let max = 0;
  for(let i of arr){
    max = Math.max(max, sum + deleteAndEarn(arr,i, memo));
  }
  memo[str] = (max == 0) ? sum : max;
  return memo[str];
};


console.log(deleteAndEarn(nums = [3,4,2]));
//console.log(deleteAndEarn(nums = [4,2]));
console.log(deleteAndEarn(nums = [2, 2, 3, 3, 3, 4]));
// console.log(deleteAndEarn(nums = [3,4,2]));
// console.log(deleteAndEarn(nums = [1,1,1,2,2]));
 //console.log(deleteAndEarn(nums = [1,1,1,2,4,5,6]));
console.log(deleteAndEarn(nums = [1,2,3,4,5]));
