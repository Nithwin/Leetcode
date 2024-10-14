/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let min = Infinity;
  nums = new Set(...nums);
  let l = 0;
  let r = nums.length - 1;
  while(l <= r){
      min = (min > nums[l]) ? nums[l] : min;
      min = (min > nums[r]) ? nums[r] : min;
      l++;
      r--;
  }
  return min;
};

a= [1,2,3,4,4,4,4];
a = [...new Set(a)];
console.log(a);
