nums = [0,1,0,3,12];
nums=[0,0,1]
var moveZeroes = function(nums) {
  let l = 0;
  let r = nums.length -1;
  while(l <= r){
      if(nums[l] === 0 ){
        console.log(nums[l]);
          nums.splice(l,1);
          nums.push(0);
          r--;
      }
      else{
        l++;
      }
  }
};
moveZeroes(nums);
console.log(nums);
