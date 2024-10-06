let nums = [0,0,0,0]
nums = nums.sort();
console.log(nums);
let a = [];
for(let i = 0;i<nums.length-1;i++){
  for(let j = i+1;j<nums.length-1;j++){
    let n = nums[i]+nums[j]+nums[j+1];
    if(n===0){
      a = [...a,[nums[i],nums[j],nums[j+1]]];
    }
  }
}
 a = ;
console.log(a);
