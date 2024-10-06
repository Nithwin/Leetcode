var findDisappearedNumbers = function(nums) {
  let a = [];
  let l = 1;
  let r = nums.length;
  nums = new Set(nums);
  console.log(nums);
  while (l<r){
    if(!nums.has(l)) a.push(l);
    if(!nums.has(r)) a.push(r);
    r--;
    l++;
  }
  return a;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));
