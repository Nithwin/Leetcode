var searchInsert = function(nums, target) {
  let pos = 0;
  let len = nums.length;
  let mid = Math.round(len/2);
  let i = mid;
  if(nums[mid] === target) return mid;
  else if (nums[mid] < target){
    let i = mid;
    while(nums[i] < target && i<len ) {
      i++;
    }
    return i;
  }
  else{
    let i = 0;
    while(i <= mid && nums[i] < target) {
      i++;
    }
    return i;
  }
};


console.log(searchInsert([1,3,5,6],5));//2
console.log(searchInsert([1,3,5,6],2));//1
console.log(searchInsert([1,3,5,6],7));//4
