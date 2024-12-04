var getMaximumXor = function(nums, maximumBit) {
  let arr = [];
  let sum = nums[0], max = nums.at(-1);
  for(let i = 1 ; i< nums.length;sum ^= nums[i],i++);
  for(let i = nums.length -1; i >= 0; i--){
    let tmp = 0;
    while ((sum ^ tmp) !== max) tmp++;
    arr.push(tmp)
    sum ^= nums[i];
  }
  return arr;
};

//console.log(getMaximumXor(nums = [0,1,1,3], maximumBit = 2));
//console.log(getMaximumXor( nums = [2,3,4,7], maximumBit = 3));
console.log(getMaximumXor( nums = [0,1,2,2,5,7], maximumBit = 3));
console.log(getMaximumXor( nums = [0,2], maximumBit = 2));


console.log(0 ^ 1 ^ 1 ^ 3, 3 ^ 0);
console.log(3  ^ 3 , 0 ^ 3);
console.log(0  ^ 1, 1 ^ 2);
console.log(1  ^ 1 , 0 ^ 3);
console.log(0  ^ 0, 0 ^ 3);


console.log(0 ^ 2, 2 ^ 0);
console.log(2 ^ 2, 0 ^ 2);
console.log(0 ^ 0, 1 ^ 3);

console.log(2 ^ 3 ^ 4 ^ 7, 2 ^ 5);
console.log(2 ^  7 , 5 ^ 2);
console.log(5 ^  4 , 1 ^ 6);
console.log(1 ^  3 , 2 ^ 5);
console.log(2 ^  2 , 0 ^ 7);
