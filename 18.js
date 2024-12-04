
var fourSum = function(nums, target) {
  let map = new Map();
  let l = 0, r = nums.length -1;
  nums = nums.sort( (x, y) => x- y);
  let result = []
  while(l < r){
      let il = l+1, ir = r - 1;
      while(il < ir){
          let tmp = nums[l] + nums[il] + nums[ir] + nums[r]
          let list = [nums[l], nums[il], nums[ir], nums[r]];
          if(tmp == target && !map.has(list.join(' '))){
              map.set(list.join('_'));
              result.push(list)
          }
          il++;
          ir--;
      }
      l++;
      r--
  }
  return result;
};

nums = [1,0,-1,0,-2,2], target = 0
console.log(fourSum(nums,target));
