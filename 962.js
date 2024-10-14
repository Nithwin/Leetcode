
var maxWidthRamp = function(nums) {
  let rightMax = [];
  let tmp = [...nums];
  let max = 0;
  for(i of tmp.reverse()){
    max = Math.max(i,max)
    rightMax.unshift(max);
  }
  let a = 0;
  let l = 0;
  for(let r = 0;r<nums.length;r++){
    while(nums[l] > rightMax[r]){
      l++;
    }
    a = Math.max(a,r-l);;
  }
  return a;
};


console.log(maxWidthRamp([6,0,8,2,1,5]));
console.log(maxWidthRamp( [9,8,1,0,1,9,4,0,4,1]));
