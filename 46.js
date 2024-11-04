
var permute = function(nums) {
  if (nums.length <=1 ) return [nums];
  const p = [];
  for(let i = 0;i<nums.length;i++){
    permute(nums.slice(0,i).concat(nums.slice(i+1))).forEach(perm => p.push([nums[i],...perm]))
  }
  return p;
};

console.log(permute([1,2,3]));

const per = nums => nums.length <= 1 ? [nums] : nums.flatMap((n,i) => per([...nums.slice(0,i),...nums.slice(i+1)]).map(p => [n,...p]))
console.log(per([1,2,3]));
