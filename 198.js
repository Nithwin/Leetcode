
var rob = function(nums, index = 0, memo = {}) {
  if(index in memo) return memo[index];
  if(index >= nums.length ) return 0;
  let maxy = 0;
  for(let i = index ;i < nums.length; i++){
      maxy = Math.max(maxy, nums[i] + rob(nums, i + 2))
  }
  memo[index] = maxy;
  return memo[index];
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
